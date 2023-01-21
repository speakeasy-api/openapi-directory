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

type CashDrawers struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCashDrawers(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CashDrawers {
	return &CashDrawers{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ListCashDrawerShiftEvents - ListCashDrawerShiftEvents
// Provides a paginated list of events for a single cash drawer shift.
func (s *CashDrawers) ListCashDrawerShiftEvents(ctx context.Context, request operations.ListCashDrawerShiftEventsRequest) (*operations.ListCashDrawerShiftEventsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/cash-drawers/shifts/{shift_id}/events", request.PathParams)

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

	res := &operations.ListCashDrawerShiftEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListCashDrawerShiftEventsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCashDrawerShiftEventsResponse = out
		}
	}

	return res, nil
}

// ListCashDrawerShifts - ListCashDrawerShifts
// Provides the details for all of the cash drawer shifts for a location
// in a date range.
func (s *CashDrawers) ListCashDrawerShifts(ctx context.Context, request operations.ListCashDrawerShiftsRequest) (*operations.ListCashDrawerShiftsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/cash-drawers/shifts"

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

	res := &operations.ListCashDrawerShiftsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListCashDrawerShiftsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCashDrawerShiftsResponse = out
		}
	}

	return res, nil
}

// RetrieveCashDrawerShift - RetrieveCashDrawerShift
// Provides the summary details for a single cash drawer shift. See
// [ListCashDrawerShiftEvents](https://developer.squareup.com/reference/square_2021-08-18/cash-drawers-api/list-cash-drawer-shift-events) for a list of cash drawer shift events.
func (s *CashDrawers) RetrieveCashDrawerShift(ctx context.Context, request operations.RetrieveCashDrawerShiftRequest) (*operations.RetrieveCashDrawerShiftResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/cash-drawers/shifts/{shift_id}", request.PathParams)

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

	res := &operations.RetrieveCashDrawerShiftResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RetrieveCashDrawerShiftResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveCashDrawerShiftResponse = out
		}
	}

	return res, nil
}
