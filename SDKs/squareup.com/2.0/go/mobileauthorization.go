package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type MobileAuthorization struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMobileAuthorization(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *MobileAuthorization {
	return &MobileAuthorization{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateMobileAuthorizationCode - CreateMobileAuthorizationCode
// Generates code to authorize a mobile application to connect to a Square card reader
//
// Authorization codes are one-time-use and expire __60 minutes__ after being issued.
//
// __Important:__ The `Authorization` header you provide to this endpoint must have the following format:
//
// ```
// Authorization: Bearer ACCESS_TOKEN
// ```
//
// Replace `ACCESS_TOKEN` with a
// [valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-tokens).
func (s *MobileAuthorization) CreateMobileAuthorizationCode(ctx context.Context, request operations.CreateMobileAuthorizationCodeRequest) (*operations.CreateMobileAuthorizationCodeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mobile/authorization-code"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateMobileAuthorizationCodeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CreateMobileAuthorizationCodeResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateMobileAuthorizationCodeResponse = out
		}
	}

	return res, nil
}
