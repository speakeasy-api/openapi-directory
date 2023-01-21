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

type ApplePay struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewApplePay(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ApplePay {
	return &ApplePay{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// RegisterDomain - RegisterDomain
// Activates a domain for use with Apple Pay on the Web and Square. A validation
// is performed on this domain by Apple to ensure that it is properly set up as
// an Apple Pay enabled domain.
//
// This endpoint provides an easy way for platform developers to bulk activate
// Apple Pay on the Web with Square for merchants using their platform.
//
// To learn more about Web Apple Pay, see
// [Add the Apple Pay on the Web Button](https://developer.squareup.com/docs/payment-form/add-digital-wallets/apple-pay).
func (s *ApplePay) RegisterDomain(ctx context.Context, request operations.RegisterDomainRequest) (*operations.RegisterDomainResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/apple-pay/domains"

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

	res := &operations.RegisterDomainResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RegisterDomainResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RegisterDomainResponse = out
		}
	}

	return res, nil
}
