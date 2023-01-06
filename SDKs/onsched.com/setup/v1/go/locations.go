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

type Locations struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewLocations(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Locations {
	return &Locations{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteSetupV1LocationsServicesID - Deletes a location service from the specified location
// Use this endpoint to delete a location service for a location
func (s *Locations) DeleteSetupV1LocationsServicesID(ctx context.Context, request operations.DeleteSetupV1LocationsServicesIDRequest) (*operations.DeleteSetupV1LocationsServicesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/services/{id}", request.PathParams)

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

	res := &operations.DeleteSetupV1LocationsServicesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsID - Deletes a location object.
// Use this endpoint to delete a location. The location is not permanently deleted and can be recovered.
func (s *Locations) DeleteSetupV1LocationsID(ctx context.Context, request operations.DeleteSetupV1LocationsIDRequest) (*operations.DeleteSetupV1LocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}", request.PathParams)

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

	res := &operations.DeleteSetupV1LocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsIDDeleteallimages - Deletes all images from location blob storage container
// An option exists to use upper case for matching the subdirectory name
// Legacy apps stored pics using upper case externalId. Api uses lower case names.
func (s *Locations) DeleteSetupV1LocationsIDDeleteallimages(ctx context.Context, request operations.DeleteSetupV1LocationsIDDeleteallimagesRequest) (*operations.DeleteSetupV1LocationsIDDeleteallimagesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/deleteallimages", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteSetupV1LocationsIDDeleteallimagesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *bool
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteSetupV1LocationsIDDeleteallimages200ApplicationJSONBoolean = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsIDDeleteimage - Removes a location image
// Use this endpoint to delete a previously uploaded location image.
func (s *Locations) DeleteSetupV1LocationsIDDeleteimage(ctx context.Context, request operations.DeleteSetupV1LocationsIDDeleteimageRequest) (*operations.DeleteSetupV1LocationsIDDeleteimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/deleteimage", request.PathParams)

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

	res := &operations.DeleteSetupV1LocationsIDDeleteimageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsIDEmailTemplatesMaster - Deletes custom master email template settings reverting to the default
// Settings exist for showing or hiding panels
// and for changing color schemes
func (s *Locations) DeleteSetupV1LocationsIDEmailTemplatesMaster(ctx context.Context, request operations.DeleteSetupV1LocationsIDEmailTemplatesMasterRequest) (*operations.DeleteSetupV1LocationsIDEmailTemplatesMasterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates/master", request.PathParams)

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

	res := &operations.DeleteSetupV1LocationsIDEmailTemplatesMasterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MasterEmailTemplateSettingsViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MasterEmailTemplateSettingsViewModel = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsIDEmailTemplatesTemplateName - Deletes a custom email template
// Use this endpoint to remove a custom email template.
//
// Custom email templates created in the primary location are company scope and inherited by all locations
// unless overriden in a location. Templates created in any location other than the primary apply to that location only.
func (s *Locations) DeleteSetupV1LocationsIDEmailTemplatesTemplateName(ctx context.Context, request operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameRequest) (*operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates/{templateName}", request.PathParams)

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

	res := &operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContentResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContentResult = out
		}
	}

	return res, nil
}

// DeleteSetupV1LocationsIDGoogleServiceAccount - Remove authorized access to all google calendar users in an organization
// Use this endpoint to remove authorized access to all google calendar users.
// Calendars will no longer be synced for resources
func (s *Locations) DeleteSetupV1LocationsIDGoogleServiceAccount(ctx context.Context, request operations.DeleteSetupV1LocationsIDGoogleServiceAccountRequest) (*operations.DeleteSetupV1LocationsIDGoogleServiceAccountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/google/service/account", request.PathParams)

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

	res := &operations.DeleteSetupV1LocationsIDGoogleServiceAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// DeleteSetupV1LocationsIDServices - Deletes all location services from the specified location
// Use this endpoint to delete all location services for a location
func (s *Locations) DeleteSetupV1LocationsIDServices(ctx context.Context, request operations.DeleteSetupV1LocationsIDServicesRequest) (*operations.DeleteSetupV1LocationsIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/services", request.PathParams)

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

	res := &operations.DeleteSetupV1LocationsIDServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1Locations - Returns a list of business locations.
// Use this api end point if you have multiple business locations in your company.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Locations) GetSetupV1Locations(ctx context.Context, request operations.GetSetupV1LocationsRequest) (*operations.GetSetupV1LocationsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/locations"

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

	res := &operations.GetSetupV1LocationsResponse{
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

			res.LocationListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1LocationsServicesID - Returns a single location services.
func (s *Locations) GetSetupV1LocationsServicesID(ctx context.Context, request operations.GetSetupV1LocationsServicesIDRequest) (*operations.GetSetupV1LocationsServicesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/services/{id}", request.PathParams)

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

	res := &operations.GetSetupV1LocationsServicesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BusinessServiceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BusinessServiceViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetSetupV1LocationsID - Returns a business location object.
// The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
func (s *Locations) GetSetupV1LocationsID(ctx context.Context, request operations.GetSetupV1LocationsIDRequest) (*operations.GetSetupV1LocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}", request.PathParams)

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

	res := &operations.GetSetupV1LocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1LocationsIDEmailTemplates - Returns email template list from the authorized company
// Returns a list of email templates that may be customized
// If the template has been customized, the customized property is true.
// The scope parameter indicates if the email template has been customized
// at Business Location level or Company level.
// Only when querying the primary business location will company scope
// customized templates display. Otherwise, the scope shows if a template has been customized
// at the business location level.
func (s *Locations) GetSetupV1LocationsIDEmailTemplates(ctx context.Context, request operations.GetSetupV1LocationsIDEmailTemplatesRequest) (*operations.GetSetupV1LocationsIDEmailTemplatesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates", request.PathParams)

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

	res := &operations.GetSetupV1LocationsIDEmailTemplatesResponse{
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

			res.EmailTemplateListViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1LocationsIDEmailTemplatesMaster - Returns master email template settings
// Settings exist for showing or hiding panels
// and for changing color schemes
func (s *Locations) GetSetupV1LocationsIDEmailTemplatesMaster(ctx context.Context, request operations.GetSetupV1LocationsIDEmailTemplatesMasterRequest) (*operations.GetSetupV1LocationsIDEmailTemplatesMasterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates/master", request.PathParams)

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

	res := &operations.GetSetupV1LocationsIDEmailTemplatesMasterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MasterEmailTemplateSettingsViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MasterEmailTemplateSettingsViewModel = out
		}
	}

	return res, nil
}

// GetSetupV1LocationsIDEmailTemplatesTemplateName - Returns company default or custom email template from the specified location
// These are custom email templates defined with Business Scope at a location other than the primary.
// The default email template is returned when a custom email template is not found.
func (s *Locations) GetSetupV1LocationsIDEmailTemplatesTemplateName(ctx context.Context, request operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameRequest) (*operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates/{templateName}", request.PathParams)

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

	res := &operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContentResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContentResult = out
		}
	}

	return res, nil
}

// GetSetupV1LocationsIDGoogleServiceAccount - Returns google service account info
// This endpoint will not go to production. It is temporary.
func (s *Locations) GetSetupV1LocationsIDGoogleServiceAccount(ctx context.Context, request operations.GetSetupV1LocationsIDGoogleServiceAccountRequest) (*operations.GetSetupV1LocationsIDGoogleServiceAccountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/google/service/account", request.PathParams)

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

	res := &operations.GetSetupV1LocationsIDGoogleServiceAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleServiceAccountCreds
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleServiceAccountCreds = out
		}
	}

	return res, nil
}

// GetSetupV1LocationsIDServices - Returns a list of location services.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *Locations) GetSetupV1LocationsIDServices(ctx context.Context, request operations.GetSetupV1LocationsIDServicesRequest) (*operations.GetSetupV1LocationsIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/services", request.PathParams)

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

	res := &operations.GetSetupV1LocationsIDServicesResponse{
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

			res.BusinessServiceListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// PostSetupV1Locations - Creates a new location object.
// Use this endpoint to create a new business location.
//
// Settings can be scoped to company or location. You can have all locations use the defined company settings or individual locations
// can define their own settings that override the company level settings.
//
// If you wish to update settings then pass in the settings element in the input.
// When you are working with the Primary location, then the settings will update the company level settings.
// Otherwise, the settings will update business location settings.
//
// If you wish to create a new location and want to just use the company wide settings, don't pass in the settings element in the input.
func (s *Locations) PostSetupV1Locations(ctx context.Context, request operations.PostSetupV1LocationsRequest) (*operations.PostSetupV1LocationsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/locations"

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

	res := &operations.PostSetupV1LocationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1LocationsBulk - Creates new location objects.
// Use this endpoint to create new business locations. The incoming list of
// locations cannot exceed 100 location objects for performance purposes.
//
// Each location object may consist of:
// Name: The Name of the location.
// AdminName: The Name of the location admin.
// AdminEmail: The email address of the location admin.
// TimezoneName: The IANA formatted name of the locations timezone.
// FriendlyId: A friendly id to use to refer to the location.
// Address: The physical address of the location.
// BusinessHours: The hours of operation of the location.
// Settings: Additional location options that can affect things like
// the book ahead restrictions, customer bookings per day, etc.
func (s *Locations) PostSetupV1LocationsBulk(ctx context.Context, request operations.PostSetupV1LocationsBulkRequest) (*operations.PostSetupV1LocationsBulkResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/setup/v1/locations/bulk"

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

	res := &operations.PostSetupV1LocationsBulkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModels = out
		}
	}

	return res, nil
}

// PostSetupV1LocationsIDEmailTemplates - Uploads a custom email template
// Use this endpoint to a create a custom email template. You must convert the content to a base64 encoded string.
// Updates to the primary business location create company scoped custom templates
// Updates to non primary business locations create business location scoped custom templates
// The master template cannot be updated with this endpoint.
func (s *Locations) PostSetupV1LocationsIDEmailTemplates(ctx context.Context, request operations.PostSetupV1LocationsIDEmailTemplatesRequest) (*operations.PostSetupV1LocationsIDEmailTemplatesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates", request.PathParams)

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

	res := &operations.PostSetupV1LocationsIDEmailTemplatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContentResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContentResult = out
		}
	}

	return res, nil
}

// PostSetupV1LocationsIDEmailTemplatesMaster - Saves settings for the master email template
// Use this endpoint to a customize the master email template settings.
// Updates to the primary business location create company scoped master email template custom settings
// Updates to non primary business locations create business location scoped master email template custom settings
func (s *Locations) PostSetupV1LocationsIDEmailTemplatesMaster(ctx context.Context, request operations.PostSetupV1LocationsIDEmailTemplatesMasterRequest) (*operations.PostSetupV1LocationsIDEmailTemplatesMasterResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/email/templates/master", request.PathParams)

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

	res := &operations.PostSetupV1LocationsIDEmailTemplatesMasterResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MasterEmailTemplateSettingsViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MasterEmailTemplateSettingsViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1LocationsIDGoogleServiceAccount - Authorize access to all google calendar users in an organization
// Use this endpoint to authorize access to all google calendar users.
// You must create a Google Service account as an admin of your GSuite,
// then save credentials as a Json Key file
func (s *Locations) PostSetupV1LocationsIDGoogleServiceAccount(ctx context.Context, request operations.PostSetupV1LocationsIDGoogleServiceAccountRequest) (*operations.PostSetupV1LocationsIDGoogleServiceAccountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/google/service/account", request.PathParams)

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

	res := &operations.PostSetupV1LocationsIDGoogleServiceAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleServiceAccountCreds
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleServiceAccountCreds = out
		}
	}

	return res, nil
}

// PostSetupV1LocationsIDServices - Adds location services to the specified location
// Use this endpoint to explicitly define what company scoped services
// at this location are offered. GET locations allows serviceId as a
// search parameter.
func (s *Locations) PostSetupV1LocationsIDServices(ctx context.Context, request operations.PostSetupV1LocationsIDServicesRequest) (*operations.PostSetupV1LocationsIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/services", request.PathParams)

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

	res := &operations.PostSetupV1LocationsIDServicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PostSetupV1LocationsIDUploadimage - Uploads a location image
// Use this endpoint to upload a location image. You must convert the image to a base64 encoded string
// and pass that string as input along with your filename.
func (s *Locations) PostSetupV1LocationsIDUploadimage(ctx context.Context, request operations.PostSetupV1LocationsIDUploadimageRequest) (*operations.PostSetupV1LocationsIDUploadimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/uploadimage", request.PathParams)

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

	res := &operations.PostSetupV1LocationsIDUploadimageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1LocationsID - Use this endpoint to change the scope of online booking settings
// Use this endpoint to update a business location.
//
// # The optional removeRegion query parameter is used to remove the region relationship from the location
//
// If the settings element is populated the scope will be set to location with the settings supplied, otherwise it will be company scope.
//
// If all your settings are uniform across all locations then do not pass settings and the location will use the settings
// defined on the primary location. This is company scope. Settings cascade down to the locations. You can override any location
// that needs different settings by providing settings in the update model.
func (s *Locations) PutSetupV1LocationsID(ctx context.Context, request operations.PutSetupV1LocationsIDRequest) (*operations.PutSetupV1LocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutSetupV1LocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1LocationsIDHolidaysHolidayIDClosed - Sets a business holiday to open or closed.
// Use this endpoint to set business holidays to open or closed.
//
// If you pass in an asterisk for the holidayId then all business holidays
// will be set to the valaue
func (s *Locations) PutSetupV1LocationsIDHolidaysHolidayIDClosed(ctx context.Context, request operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedRequest) (*operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/holidays/{holidayId}/{closed}", request.PathParams)

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

	res := &operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1LocationsIDRecover - Recovers a location object.
// Use this endpoint to recover a deleted business location.
func (s *Locations) PutSetupV1LocationsIDRecover(ctx context.Context, request operations.PutSetupV1LocationsIDRecoverRequest) (*operations.PutSetupV1LocationsIDRecoverResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/recover", request.PathParams)

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

	res := &operations.PutSetupV1LocationsIDRecoverResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// PutSetupV1LocationsIDSettingsScopeSettingsScope - Changes the scope of OnlineBooking Settings.
// Use this endpoint to update a business location.
//
// settingsScope values are 0 = company scope, 1 = business location scope
// if you wish to inherit the online settings defined in the primary location then use value 0 for company scope.
// Otherwise if you wish to override the settings for a specific location then use value = 1 for business location scope
// ///
func (s *Locations) PutSetupV1LocationsIDSettingsScopeSettingsScope(ctx context.Context, request operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeRequest) (*operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/setup/v1/locations/{id}/settings/scope/{settingsScope}", request.PathParams)

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

	res := &operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}
