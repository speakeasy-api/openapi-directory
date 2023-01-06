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

type FundsConfirmations struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFundsConfirmations(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *FundsConfirmations {
	return &FundsConfirmations{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateFundsConfirmationConsents - Create Funds Confirmation Consent
func (s *FundsConfirmations) CreateFundsConfirmationConsents(ctx context.Context, request operations.CreateFundsConfirmationConsentsRequest) (*operations.CreateFundsConfirmationConsentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/funds-confirmation-consents"

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateFundsConfirmationConsentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObFundsConfirmationConsentResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBFundsConfirmationConsentResponse1 = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 415:
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	}

	return res, nil
}

// CreateFundsConfirmations - Create Funds Confirmation
func (s *FundsConfirmations) CreateFundsConfirmations(ctx context.Context, request operations.CreateFundsConfirmationsRequest) (*operations.CreateFundsConfirmationsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/funds-confirmations"

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateFundsConfirmationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObFundsConfirmationResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBFundsConfirmationResponse1 = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 415:
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	}

	return res, nil
}

// DeleteFundsConfirmationConsentsConsentID - Delete Funds Confirmation Consent
func (s *FundsConfirmations) DeleteFundsConfirmationConsentsConsentID(ctx context.Context, request operations.DeleteFundsConfirmationConsentsConsentIDRequest) (*operations.DeleteFundsConfirmationConsentsConsentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/funds-confirmation-consents/{ConsentId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteFundsConfirmationConsentsConsentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	}

	return res, nil
}

// GetFundsConfirmationConsentsConsentID - Get Funds Confirmation Consent
func (s *FundsConfirmations) GetFundsConfirmationConsentsConsentID(ctx context.Context, request operations.GetFundsConfirmationConsentsConsentIDRequest) (*operations.GetFundsConfirmationConsentsConsentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/funds-confirmation-consents/{ConsentId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetFundsConfirmationConsentsConsentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObFundsConfirmationConsentResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBFundsConfirmationConsentResponse1 = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 429:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	}

	return res, nil
}
