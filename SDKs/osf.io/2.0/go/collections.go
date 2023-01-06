package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type Collections struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCollections(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Collections {
	return &Collections{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CollectionsAddMetadata - Add Metadata or Subjects to a Entitiy in a Collection
// List of user created metadata for entities within a collection.
// #### Permissions
// To edit this collection a user must have collections write permissions
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsAddMetadata(ctx context.Context, request operations.CollectionsAddMetadataRequest) (*operations.CollectionsAddMetadataResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsAddMetadataResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// CollectionsCollectedMetadata - Retrieve subject data for a specific piece of metadata info for a collection
//
// #### Permissions
// In order to view these subject it must be a public collection or a user must have read permissions for collection.
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsCollectedMetadata(ctx context.Context, request operations.CollectionsCollectedMetadataRequest) (*operations.CollectionsCollectedMetadataResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}/subjects/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsCollectedMetadataResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsCreate - Create a Collection
// Retrieves a list collections, either public or related to the user
// #### Permissions
// Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
//
// Comments on private nodes are only visible to contributors and administrators on the parent node.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsCreate(ctx context.Context, request operations.CollectionsCreateRequest) (*operations.CollectionsCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/collections/"

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// CollectionsDelete - Delete a Collection
// Deletes a collection, if the user has appropriate permissions.
// #### Permissions
// Users must have write permissions on a collection in order to delete it
// #### Returns
// Nothing is returned in the body
func (s *Collections) CollectionsDelete(ctx context.Context, request operations.CollectionsDeleteRequest) (*operations.CollectionsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// CollectionsDetail - Retrieve a Collection
// Retrieves a collection, if the user has appropriate permissions.
//
// #### Permissions
// Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsDetail(ctx context.Context, request operations.CollectionsDetailRequest) (*operations.CollectionsDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// CollectionsLinkedNodesList - List All Linked Nodes for a Collection
// List of all nodes linked to the given collection.
// #### Permissions
// This returns all public nodes associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsLinkedNodesList(ctx context.Context, request operations.CollectionsLinkedNodesListRequest) (*operations.CollectionsLinkedNodesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_nodes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedNodesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsLinkedNodesRelationships - Link Nodes to Collection
// This endpoint allow users to a add a node to a collection by issuing a POST request.
// #### Permissions
// This returns all public nodes associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsLinkedNodesRelationships(ctx context.Context, request operations.CollectionsLinkedNodesRelationshipsRequest) (*operations.CollectionsLinkedNodesRelationshipsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_nodes/relationships/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedNodesRelationshipsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// CollectionsLinkedNodesRelationshipsCreate - Give a Sparse List of Node Ids
// List of all the node ids linked to the given collection.
// #### Permissions
// This returns all public nodes associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsLinkedNodesRelationshipsCreate(ctx context.Context, request operations.CollectionsLinkedNodesRelationshipsCreateRequest) (*operations.CollectionsLinkedNodesRelationshipsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_nodes/relationships/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedNodesRelationshipsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsLinkedNodesRelationshipsDelete - Remove Nodes From Collection
//
// This removes associated nodes from a collection
// #### Permissions
// Any user with write permissions on this collection should be to remove nodes from this collection.
// #### Returns
// Nothing in the response body.
func (s *Collections) CollectionsLinkedNodesRelationshipsDelete(ctx context.Context, request operations.CollectionsLinkedNodesRelationshipsDeleteRequest) (*operations.CollectionsLinkedNodesRelationshipsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_nodes/relationships/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedNodesRelationshipsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsLinkedPreprintsList - List All Linked Preprints for a Collection
// List of all preprints linked to the given collection.
// #### Permissions
// This returns all public preprints associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsLinkedPreprintsList(ctx context.Context, request operations.CollectionsLinkedPreprintsListRequest) (*operations.CollectionsLinkedPreprintsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_preprints/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedPreprintsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsLinkedRegistrationsList - List All Linked Registrations for a Collection
// List of all registrations linked to the given collection.
// #### Permissions
// This returns all public registrations associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsLinkedRegistrationsList(ctx context.Context, request operations.CollectionsLinkedRegistrationsListRequest) (*operations.CollectionsLinkedRegistrationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_registrations/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedRegistrationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsLinkedRegistrationsRelationships - Link Registrations to Collection
// This endpoint allow users to a add a registration to a collection by issuing a POST request.
// #### Permissions
// This returns all public registrations associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
//
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsLinkedRegistrationsRelationships(ctx context.Context, request operations.CollectionsLinkedRegistrationsRelationshipsRequest) (*operations.CollectionsLinkedRegistrationsRelationshipsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_registrations/relationships/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedRegistrationsRelationshipsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// CollectionsLinkedRegistrationsRelationshipsCreate - Give a Sparse List of Registrations Ids
// List of all the registration ids linked to the given collection.
// #### Permissions
// This returns all public registrations associated with this collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsLinkedRegistrationsRelationshipsCreate(ctx context.Context, request operations.CollectionsLinkedRegistrationsRelationshipsCreateRequest) (*operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_registrations/relationships/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsLinkedRegistrationsRelationshipsDelete - Remove Registrations From Collection
//
// This removes associated registrations from a collection
// #### Permissions
// Any user with write permissions on this collection should be to remove registrations from this collection.
// #### Returns
// Nothing in the response body.
func (s *Collections) CollectionsLinkedRegistrationsRelationshipsDelete(ctx context.Context, request operations.CollectionsLinkedRegistrationsRelationshipsDeleteRequest) (*operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/linked_registrations/relationships/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsList - List all Collections
// Retrieves a list collections, either public or related to the user
// #### Permissions
// Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
//
// Comments on private nodes are only visible to contributors and administrators on the parent node.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsList(ctx context.Context) (*operations.CollectionsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/collections/"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// CollectionsMetadataDelete - Delete Collection Metadata from entitiy
//
// #### Permissions
// Only a user with collection admin permissions can delete collected metadata
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsMetadataDelete(ctx context.Context, request operations.CollectionsMetadataDeleteRequest) (*operations.CollectionsMetadataDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsMetadataDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// CollectionsMetadataDetail - Add Metadata or Subjects to an Entity in a Collection
// List of user created metadata for entities within a collection.
// #### Permissions
// To edit this collection a user must have collections write permissions
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsMetadataDetail(ctx context.Context, request operations.CollectionsMetadataDetailRequest) (*operations.CollectionsMetadataDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsMetadataDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}

// CollectionsMetadataRegistrationsDetail - Retrieve Specific Metadata for a Collection
//
// #### Permissions
// In order to view this metadata it must be public or a user must have read permissions for collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsMetadataRegistrationsDetail(ctx context.Context, request operations.CollectionsMetadataRegistrationsDetailRequest) (*operations.CollectionsMetadataRegistrationsDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsMetadataRegistrationsDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsMetadataRegistrationsList - Retrieve a list of collected metadata for a collection
// List of user created metadata for entities within a collection.
// #### Permissions
// In order to view this metadata it must be public or a user must have read permissions for collection.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsMetadataRegistrationsList(ctx context.Context, request operations.CollectionsMetadataRegistrationsListRequest) (*operations.CollectionsMetadataRegistrationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsMetadataRegistrationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsMetadataSubjectsRelationships - Retrieve subject metadata for a specific piece of metadata in a collection
//
// #### Permissions
// This is public for a logged out user when an entity is public.
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsMetadataSubjectsRelationships(ctx context.Context, request operations.CollectionsMetadataSubjectsRelationshipsRequest) (*operations.CollectionsMetadataSubjectsRelationshipsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsMetadataSubjectsRelationshipsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CollectionsMetadataSubjectsRelationshipsUpdate - Update subjects for a specific piece of metadata in a collection
//
// #### Permissions
// This is editable for a user with a write permission for this collection.
//
// #### Returns
// Returns a JSON object containing `data` and `links` keys.
//
// The `data` key contains an array of nodes ids.
// The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
func (s *Collections) CollectionsMetadataSubjectsRelationshipsUpdate(ctx context.Context, request operations.CollectionsMetadataSubjectsRelationshipsUpdateRequest) (*operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/collections/{collection_id}/collected_metadata/{cgm_id}/relationships/subjects/", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	}

	return res, nil
}
