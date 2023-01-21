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

type Inventory struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewInventory(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Inventory {
	return &Inventory{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// BatchChangeInventory - BatchChangeInventory
// Applies adjustments and counts to the provided item quantities.
//
// On success: returns the current calculated counts for all objects
// referenced in the request.
// On failure: returns a list of related errors.
func (s *Inventory) BatchChangeInventory(ctx context.Context, request operations.BatchChangeInventoryRequest) (*operations.BatchChangeInventoryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/inventory/changes/batch-create"

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

	res := &operations.BatchChangeInventoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BatchChangeInventoryResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchChangeInventoryResponse = out
		}
	}

	return res, nil
}

// BatchRetrieveInventoryChanges - BatchRetrieveInventoryChanges
// Returns historical physical counts and adjustments based on the
// provided filter criteria.
//
// Results are paginated and sorted in ascending order according their
// `occurred_at` timestamp (oldest first).
//
// BatchRetrieveInventoryChanges is a catch-all query endpoint for queries
// that cannot be handled by other, simpler endpoints.
func (s *Inventory) BatchRetrieveInventoryChanges(ctx context.Context, request operations.BatchRetrieveInventoryChangesRequest) (*operations.BatchRetrieveInventoryChangesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/inventory/changes/batch-retrieve"

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

	res := &operations.BatchRetrieveInventoryChangesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BatchRetrieveInventoryChangesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchRetrieveInventoryChangesResponse = out
		}
	}

	return res, nil
}

// BatchRetrieveInventoryCounts - BatchRetrieveInventoryCounts
// Returns current counts for the provided
// [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s at the requested
// [Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s.
//
// Results are paginated and sorted in descending order according to their
// `calculated_at` timestamp (newest first).
//
// When `updated_after` is specified, only counts that have changed since that
// time (based on the server timestamp for the most recent change) are
// returned. This allows clients to perform a "sync" operation, for example
// in response to receiving a Webhook notification.
func (s *Inventory) BatchRetrieveInventoryCounts(ctx context.Context, request operations.BatchRetrieveInventoryCountsRequest) (*operations.BatchRetrieveInventoryCountsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/inventory/counts/batch-retrieve"

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

	res := &operations.BatchRetrieveInventoryCountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BatchRetrieveInventoryCountsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchRetrieveInventoryCountsResponse = out
		}
	}

	return res, nil
}

// DeprecatedBatchChangeInventory - DeprecatedBatchChangeInventory
// Deprecated version of [BatchChangeInventory](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-change-inventory) after the endpoint URL
// is updated to conform to the standard convention.
func (s *Inventory) DeprecatedBatchChangeInventory(ctx context.Context, request operations.DeprecatedBatchChangeInventoryRequest) (*operations.DeprecatedBatchChangeInventoryResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/inventory/batch-change"

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

	res := &operations.DeprecatedBatchChangeInventoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BatchChangeInventoryResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchChangeInventoryResponse = out
		}
	}

	return res, nil
}

// DeprecatedBatchRetrieveInventoryChanges - DeprecatedBatchRetrieveInventoryChanges
// Deprecated version of [BatchRetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-changes) after the endpoint URL
// is updated to conform to the standard convention.
func (s *Inventory) DeprecatedBatchRetrieveInventoryChanges(ctx context.Context, request operations.DeprecatedBatchRetrieveInventoryChangesRequest) (*operations.DeprecatedBatchRetrieveInventoryChangesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/inventory/batch-retrieve-changes"

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

	res := &operations.DeprecatedBatchRetrieveInventoryChangesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BatchRetrieveInventoryChangesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchRetrieveInventoryChangesResponse = out
		}
	}

	return res, nil
}

// DeprecatedBatchRetrieveInventoryCounts - DeprecatedBatchRetrieveInventoryCounts
// Deprecated version of [BatchRetrieveInventoryCounts](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-counts) after the endpoint URL
// is updated to conform to the standard convention.
func (s *Inventory) DeprecatedBatchRetrieveInventoryCounts(ctx context.Context, request operations.DeprecatedBatchRetrieveInventoryCountsRequest) (*operations.DeprecatedBatchRetrieveInventoryCountsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/inventory/batch-retrieve-counts"

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

	res := &operations.DeprecatedBatchRetrieveInventoryCountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BatchRetrieveInventoryCountsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchRetrieveInventoryCountsResponse = out
		}
	}

	return res, nil
}

// DeprecatedRetrieveInventoryAdjustment - DeprecatedRetrieveInventoryAdjustment
// Deprecated version of [RetrieveInventoryAdjustment](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/retrieve-inventory-adjustment) after the endpoint URL
// is updated to conform to the standard convention.
func (s *Inventory) DeprecatedRetrieveInventoryAdjustment(ctx context.Context, request operations.DeprecatedRetrieveInventoryAdjustmentRequest) (*operations.DeprecatedRetrieveInventoryAdjustmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/inventory/adjustment/{adjustment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeprecatedRetrieveInventoryAdjustmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RetrieveInventoryAdjustmentResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveInventoryAdjustmentResponse = out
		}
	}

	return res, nil
}

// DeprecatedRetrieveInventoryPhysicalCount - DeprecatedRetrieveInventoryPhysicalCount
// Deprecated version of [RetrieveInventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/retrieve-inventory-physical-count) after the endpoint URL
// is updated to conform to the standard convention.
func (s *Inventory) DeprecatedRetrieveInventoryPhysicalCount(ctx context.Context, request operations.DeprecatedRetrieveInventoryPhysicalCountRequest) (*operations.DeprecatedRetrieveInventoryPhysicalCountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/inventory/physical-count/{physical_count_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeprecatedRetrieveInventoryPhysicalCountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RetrieveInventoryPhysicalCountResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveInventoryPhysicalCountResponse = out
		}
	}

	return res, nil
}

// RetrieveInventoryAdjustment - RetrieveInventoryAdjustment
// Returns the [InventoryAdjustment](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryAdjustment) object
// with the provided `adjustment_id`.
func (s *Inventory) RetrieveInventoryAdjustment(ctx context.Context, request operations.RetrieveInventoryAdjustmentRequest) (*operations.RetrieveInventoryAdjustmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/inventory/adjustments/{adjustment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetrieveInventoryAdjustmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RetrieveInventoryAdjustmentResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveInventoryAdjustmentResponse = out
		}
	}

	return res, nil
}

// RetrieveInventoryChanges - RetrieveInventoryChanges
// Returns a set of physical counts and inventory adjustments for the
// provided [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) at the requested
// [Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s.
//
// You can achieve the same result by calling [BatchRetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-changes)
// and having the `catalog_object_ids` list contain a single element of the `CatalogObject` ID.
//
// Results are paginated and sorted in descending order according to their
// `occurred_at` timestamp (newest first).
//
// There are no limits on how far back the caller can page. This endpoint can be
// used to display recent changes for a specific item. For more
// sophisticated queries, use a batch endpoint.
func (s *Inventory) RetrieveInventoryChanges(ctx context.Context, request operations.RetrieveInventoryChangesRequest) (*operations.RetrieveInventoryChangesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/inventory/{catalog_object_id}/changes", request.PathParams)

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

	res := &operations.RetrieveInventoryChangesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RetrieveInventoryChangesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveInventoryChangesResponse = out
		}
	}

	return res, nil
}

// RetrieveInventoryCount - RetrieveInventoryCount
// Retrieves the current calculated stock count for a given
// [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) at a given set of
// [Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s. Responses are paginated and unsorted.
// For more sophisticated queries, use a batch endpoint.
func (s *Inventory) RetrieveInventoryCount(ctx context.Context, request operations.RetrieveInventoryCountRequest) (*operations.RetrieveInventoryCountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/inventory/{catalog_object_id}", request.PathParams)

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

	res := &operations.RetrieveInventoryCountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RetrieveInventoryCountResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveInventoryCountResponse = out
		}
	}

	return res, nil
}

// RetrieveInventoryPhysicalCount - RetrieveInventoryPhysicalCount
// Returns the [InventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryPhysicalCount)
// object with the provided `physical_count_id`.
func (s *Inventory) RetrieveInventoryPhysicalCount(ctx context.Context, request operations.RetrieveInventoryPhysicalCountRequest) (*operations.RetrieveInventoryPhysicalCountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/inventory/physical-counts/{physical_count_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetrieveInventoryPhysicalCountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RetrieveInventoryPhysicalCountResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveInventoryPhysicalCountResponse = out
		}
	}

	return res, nil
}

// RetrieveInventoryTransfer - RetrieveInventoryTransfer
// Returns the [InventoryTransfer](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryTransfer) object
// with the provided `transfer_id`.
func (s *Inventory) RetrieveInventoryTransfer(ctx context.Context, request operations.RetrieveInventoryTransferRequest) (*operations.RetrieveInventoryTransferResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/inventory/transfers/{transfer_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetrieveInventoryTransferResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RetrieveInventoryTransferResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveInventoryTransferResponse = out
		}
	}

	return res, nil
}
