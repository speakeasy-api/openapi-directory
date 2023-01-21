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

type Catalog struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCatalog(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Catalog {
	return &Catalog{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// BatchDeleteCatalogObjects - BatchDeleteCatalogObjects
// Deletes a set of [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)s based on the
// provided list of target IDs and returns a set of successfully deleted IDs in
// the response. Deletion is a cascading event such that all children of the
// targeted object are also deleted. For example, deleting a CatalogItem will
// also delete all of its [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
// children.
//
// `BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
// IDs can be deleted. The response will only include IDs that were
// actually deleted.
func (s *Catalog) BatchDeleteCatalogObjects(ctx context.Context, request operations.BatchDeleteCatalogObjectsRequest) (*operations.BatchDeleteCatalogObjectsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/catalog/batch-delete"

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

	res := &operations.BatchDeleteCatalogObjectsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BatchDeleteCatalogObjectsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchDeleteCatalogObjectsResponse = out
		}
	}

	return res, nil
}

// BatchRetrieveCatalogObjects - BatchRetrieveCatalogObjects
// Returns a set of objects based on the provided ID.
// Each [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) returned in the set includes all of its
// child information including: all of its
// [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) objects, references to
// its [CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects, and the ids of
// any [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to it.
func (s *Catalog) BatchRetrieveCatalogObjects(ctx context.Context, request operations.BatchRetrieveCatalogObjectsRequest) (*operations.BatchRetrieveCatalogObjectsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/catalog/batch-retrieve"

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

	res := &operations.BatchRetrieveCatalogObjectsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BatchRetrieveCatalogObjectsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchRetrieveCatalogObjectsResponse = out
		}
	}

	return res, nil
}

// BatchUpsertCatalogObjects - BatchUpsertCatalogObjects
// Creates or updates up to 10,000 target objects based on the provided
// list of objects. The target objects are grouped into batches and each batch is
// inserted/updated in an all-or-nothing manner. If an object within a batch is
// malformed in some way, or violates a database constraint, the entire batch
// containing that item will be disregarded. However, other batches in the same
// request may still succeed. Each batch may contain up to 1,000 objects, and
// batches will be processed in order as long as the total object count for the
// request (items, variations, modifier lists, discounts, and taxes) is no more
// than 10,000.
func (s *Catalog) BatchUpsertCatalogObjects(ctx context.Context, request operations.BatchUpsertCatalogObjectsRequest) (*operations.BatchUpsertCatalogObjectsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/catalog/batch-upsert"

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

	res := &operations.BatchUpsertCatalogObjectsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BatchUpsertCatalogObjectsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchUpsertCatalogObjectsResponse = out
		}
	}

	return res, nil
}

// CatalogInfo - CatalogInfo
// Retrieves information about the Square Catalog API, such as batch size
// limits that can be used by the `BatchUpsertCatalogObjects` endpoint.
func (s *Catalog) CatalogInfo(ctx context.Context, request operations.CatalogInfoRequest) (*operations.CatalogInfoResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/catalog/info"

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

	res := &operations.CatalogInfoResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CatalogInfoResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CatalogInfoResponse = out
		}
	}

	return res, nil
}

// DeleteCatalogObject - DeleteCatalogObject
// Deletes a single [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) based on the
// provided ID and returns the set of successfully deleted IDs in the response.
// Deletion is a cascading event such that all children of the targeted object
// are also deleted. For example, deleting a [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
// will also delete all of its
// [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) children.
func (s *Catalog) DeleteCatalogObject(ctx context.Context, request operations.DeleteCatalogObjectRequest) (*operations.DeleteCatalogObjectResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/catalog/object/{object_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteCatalogObjectResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DeleteCatalogObjectResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteCatalogObjectResponse = out
		}
	}

	return res, nil
}

// ListCatalog - ListCatalog
// Returns a list of [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s that includes
// all objects of a set of desired types (for example, all [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
// and [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects) in the catalog. The `types` parameter
// is specified as a comma-separated list of valid [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) types:
// `ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`.
//
// __Important:__ ListCatalog does not return deleted catalog items. To retrieve
// deleted catalog items, use [SearchCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-objects)
// and set the `include_deleted_objects` attribute value to `true`.
func (s *Catalog) ListCatalog(ctx context.Context, request operations.ListCatalogRequest) (*operations.ListCatalogResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/catalog/list"

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

	res := &operations.ListCatalogResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListCatalogResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCatalogResponse = out
		}
	}

	return res, nil
}

// RetrieveCatalogObject - RetrieveCatalogObject
// Returns a single [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) as a
// [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) based on the provided ID. The returned
// object includes all of the relevant [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
// information including: [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
// children, references to its
// [CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects, and the ids of
// any [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to it.
func (s *Catalog) RetrieveCatalogObject(ctx context.Context, request operations.RetrieveCatalogObjectRequest) (*operations.RetrieveCatalogObjectResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/catalog/object/{object_id}", request.PathParams)

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

	res := &operations.RetrieveCatalogObjectResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RetrieveCatalogObjectResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveCatalogObjectResponse = out
		}
	}

	return res, nil
}

// SearchCatalogItems - SearchCatalogItems
// Searches for catalog items or item variations by matching supported search attribute values, including
// custom attribute values, against one or more of the specified query expressions.
//
// This (`SearchCatalogItems`) endpoint differs from the [SearchCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-objects)
// endpoint in the following aspects:
//
// - `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
// - `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
// - `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
// - The both endpoints use different call conventions, including the query filter formats.
func (s *Catalog) SearchCatalogItems(ctx context.Context, request operations.SearchCatalogItemsRequest) (*operations.SearchCatalogItemsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/catalog/search-catalog-items"

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

	res := &operations.SearchCatalogItemsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SearchCatalogItemsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchCatalogItemsResponse = out
		}
	}

	return res, nil
}

// SearchCatalogObjects - SearchCatalogObjects
// Searches for [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) of any type by matching supported search attribute values,
// excluding custom attribute values on items or item variations, against one or more of the specified query expressions.
//
// This (`SearchCatalogObjects`) endpoint differs from the [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items)
// endpoint in the following aspects:
//
// - `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
// - `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
// - `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
// - The both endpoints have different call conventions, including the query filter formats.
func (s *Catalog) SearchCatalogObjects(ctx context.Context, request operations.SearchCatalogObjectsRequest) (*operations.SearchCatalogObjectsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/catalog/search"

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

	res := &operations.SearchCatalogObjectsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SearchCatalogObjectsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchCatalogObjectsResponse = out
		}
	}

	return res, nil
}

// UpdateItemModifierLists - UpdateItemModifierLists
// Updates the [CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects
// that apply to the targeted [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) without having
// to perform an upsert on the entire item.
func (s *Catalog) UpdateItemModifierLists(ctx context.Context, request operations.UpdateItemModifierListsRequest) (*operations.UpdateItemModifierListsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/catalog/update-item-modifier-lists"

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

	res := &operations.UpdateItemModifierListsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UpdateItemModifierListsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateItemModifierListsResponse = out
		}
	}

	return res, nil
}

// UpdateItemTaxes - UpdateItemTaxes
// Updates the [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to the
// targeted [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) without having to perform an
// upsert on the entire item.
func (s *Catalog) UpdateItemTaxes(ctx context.Context, request operations.UpdateItemTaxesRequest) (*operations.UpdateItemTaxesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/catalog/update-item-taxes"

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

	res := &operations.UpdateItemTaxesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UpdateItemTaxesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateItemTaxesResponse = out
		}
	}

	return res, nil
}

// UpsertCatalogObject - UpsertCatalogObject
// Creates or updates the target [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject).
func (s *Catalog) UpsertCatalogObject(ctx context.Context, request operations.UpsertCatalogObjectRequest) (*operations.UpsertCatalogObjectResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/catalog/object"

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

	res := &operations.UpsertCatalogObjectResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.UpsertCatalogObjectResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpsertCatalogObjectResponse = out
		}
	}

	return res, nil
}
