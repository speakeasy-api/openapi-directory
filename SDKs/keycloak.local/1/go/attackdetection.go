package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type AttackDetection struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAttackDetection(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AttackDetection {
	return &AttackDetection{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteRealmAttackDetectionBruteForceUsers - Clear any user login failures for all users   This can release temporary disabled users
func (s *AttackDetection) DeleteRealmAttackDetectionBruteForceUsers(ctx context.Context, request operations.DeleteRealmAttackDetectionBruteForceUsersRequest) (*operations.DeleteRealmAttackDetectionBruteForceUsersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/attack-detection/brute-force/users", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRealmAttackDetectionBruteForceUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmAttackDetectionBruteForceUsersUserID - Clear any user login failures for the user   This can release temporary disabled user
func (s *AttackDetection) DeleteRealmAttackDetectionBruteForceUsersUserID(ctx context.Context, request operations.DeleteRealmAttackDetectionBruteForceUsersUserIDRequest) (*operations.DeleteRealmAttackDetectionBruteForceUsersUserIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/attack-detection/brute-force/users/{userId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRealmAttackDetectionBruteForceUsersUserIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// GetRealmAttackDetectionBruteForceUsersUserID - Get status of a username in brute force detection
func (s *AttackDetection) GetRealmAttackDetectionBruteForceUsersUserID(ctx context.Context, request operations.GetRealmAttackDetectionBruteForceUsersUserIDRequest) (*operations.GetRealmAttackDetectionBruteForceUsersUserIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/attack-detection/brute-force/users/{userId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRealmAttackDetectionBruteForceUsersUserIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetRealmAttackDetectionBruteForceUsersUserID2XXApplicationJSONObject = out
		}
	}

	return res, nil
}
