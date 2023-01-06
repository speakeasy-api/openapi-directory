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

type Calendars struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCalendars(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Calendars {
	return &Calendars{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteSetupV1CalendarsBlockID - Delete a calendar block object
// Deletes a calendar block.
func (s *Calendars) DeleteSetupV1CalendarsBlockID(ctx context.Context, request operations.DeleteSetupV1CalendarsBlockIDRequest) (*operations.DeleteSetupV1CalendarsBlockIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/block/{id}", request.PathParams)

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

	res := &operations.DeleteSetupV1CalendarsBlockIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CalendarBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarBlockViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1CalendarsID - Deletes a calendar object.
// Use this endpoint to delete a calendar. The calendar is not permanently deleted and can be recovered.
func (s *Calendars) DeleteSetupV1CalendarsID(ctx context.Context, request operations.DeleteSetupV1CalendarsIDRequest) (*operations.DeleteSetupV1CalendarsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}", request.PathParams)

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

	res := &operations.DeleteSetupV1CalendarsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1Calendars - Returns a list of calendars.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Calendars) GetSetupV1Calendars(ctx context.Context, request operations.GetSetupV1CalendarsRequest) (*operations.GetSetupV1CalendarsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/calendars"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CalendarsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CalendarsBlocksID - Update a calendar block
func (s *Calendars) GetSetupV1CalendarsBlocksID(ctx context.Context, request operations.GetSetupV1CalendarsBlocksIDRequest) (*operations.GetSetupV1CalendarsBlocksIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/blocks/{id}", request.PathParams)

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

	res := &operations.GetSetupV1CalendarsBlocksIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CalendarBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarBlockViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CalendarsID - Returns a calendar object.
// The result returned is a single calendar object. An id is required to find the calendar.
func (s *Calendars) GetSetupV1CalendarsID(ctx context.Context, request operations.GetSetupV1CalendarsIDRequest) (*operations.GetSetupV1CalendarsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}", request.PathParams)

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

	res := &operations.GetSetupV1CalendarsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1CalendarsIDBlocks - Returns a list of calendar blocks.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Calendars) GetSetupV1CalendarsIDBlocks(ctx context.Context, request operations.GetSetupV1CalendarsIDBlocksRequest) (*operations.GetSetupV1CalendarsIDBlocksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}/blocks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CalendarsIDBlocksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarBlockListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1CalendarsIDServices - Returns a list of services linked to a calendar.
// The result returned is a list of services. An id is required to find the service. Find calendar id's using either the GET setup/v1/calendars end point
func (s *Calendars) GetSetupV1CalendarsIDServices(ctx context.Context, request operations.GetSetupV1CalendarsIDServicesRequest) (*operations.GetSetupV1CalendarsIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}/services", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSetupV1CalendarsIDServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceListViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1Calendars - Creates a new calendar object.
// Use this endpoint to create an additional calendar. If not specified, the business location id defaults to the primary location of the company.<br /><br />
// Note: Every location has a primary calendar. All appointments will be booked to that calendar unless otherwise specified with a linked service.<br /><br />
// name is a required parameter<br /><br />
// type is a required parameter with a value of “resource”<br /><br />
// interval is a required parameter with a value of 1,5,10,15,20,30,60<br /><br />
// bookingsPerSlot is a required parameter with a value between 1 and 20<br /><br />
// scheduleGroupId is an optional parameter.If supplied, it must be a valid Resource Group Id<br /><br />
// weekly availability is optional.If this element is not populated, then weekly availability defaults to the business hours<br /><br />
func (s *Calendars) PostSetupV1Calendars(ctx context.Context, request operations.PostSetupV1CalendarsRequest) (*operations.PostSetupV1CalendarsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/calendars"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1CalendarsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1CalendarsIDBlock - Create a new calendar block
// Creates a new calendar block. You must specify a StartDateTime and EndDateTime.
// A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
//
// Calendar blocks can be set to specific time ranges or for the whole day.
//
// Calendar blocks can be for a specific date range instance or set to repeat at a specified frequency.
// The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
//
// Daily blocks will repeat for each day of the week for the date range specified.
//
// Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
// you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
// of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
// For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
//
// Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
// the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
// repeat every 10 days. The interval property applies to all repeat frequencies.
//
// Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
// the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
//
// Repeat blocks will end on the date specified by the end date. You can specify never in the EndDateTime field to indicate the repeating block
// should continue indefinitely.
func (s *Calendars) PostSetupV1CalendarsIDBlock(ctx context.Context, request operations.PostSetupV1CalendarsIDBlockRequest) (*operations.PostSetupV1CalendarsIDBlockResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}/block", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSetupV1CalendarsIDBlockResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceBlockViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1CalendarsBlockID - Update a calendar block
// Updates a calendar block. Refer to the details in the POST calendar block for setting each of the required parameters.
func (s *Calendars) PutSetupV1CalendarsBlockID(ctx context.Context, request operations.PutSetupV1CalendarsBlockIDRequest) (*operations.PutSetupV1CalendarsBlockIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/block/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1CalendarsBlockIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CalendarBlockViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CalendarBlockViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1CalendarsID - Updates a calendar object.
// Use this endpoint to update a calendar.
// Calendar availability is optional. If this element is not populated then weekly availability is not updated
func (s *Calendars) PutSetupV1CalendarsID(ctx context.Context, request operations.PutSetupV1CalendarsIDRequest) (*operations.PutSetupV1CalendarsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1CalendarsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1CalendarsIDRecover - Recovers a calendar object.
// Use this endpoint to recover a deleted calendar.
func (s *Calendars) PutSetupV1CalendarsIDRecover(ctx context.Context, request operations.PutSetupV1CalendarsIDRecoverRequest) (*operations.PutSetupV1CalendarsIDRecoverResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/calendars/{id}/recover", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.PutSetupV1CalendarsIDRecoverResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScheduleViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScheduleViewModel = out
		}
	}

	return res, nil
}
