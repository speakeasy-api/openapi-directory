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

type GiftCardActivities struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewGiftCardActivities(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *GiftCardActivities {
	return &GiftCardActivities{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateGiftCardActivity - CreateGiftCardActivity
// Creates a gift card activity. For more information, see
// [GiftCardActivity](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#giftcardactivity) and
// [Using activated gift cards](https://developer.squareup.com/docs/gift-cards/using-gift-cards-api#using-activated-gift-cards).
func (s *GiftCardActivities) CreateGiftCardActivity(ctx context.Context, request operations.CreateGiftCardActivityRequest) (*operations.CreateGiftCardActivityResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/gift-cards/activities"

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

	res := &operations.CreateGiftCardActivityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CreateGiftCardActivityResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateGiftCardActivityResponse = out
		}
	}

	return res, nil
}

// ListGiftCardActivities - ListGiftCardActivities
// Lists gift card activities. By default, you get gift card activities for all
// gift cards in the seller's account. You can optionally specify query parameters to
// filter the list. For example, you can get a list of gift card activities for a gift card,
// for all gift cards in a specific region, or for activities within a time window.
func (s *GiftCardActivities) ListGiftCardActivities(ctx context.Context, request operations.ListGiftCardActivitiesRequest) (*operations.ListGiftCardActivitiesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/gift-cards/activities"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListGiftCardActivitiesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListGiftCardActivitiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListGiftCardActivitiesResponse = out
		}
	}

	return res, nil
}
