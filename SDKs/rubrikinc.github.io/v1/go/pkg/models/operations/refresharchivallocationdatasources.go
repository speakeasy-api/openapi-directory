// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type RefreshArchivalLocationDataSourcesRequest struct {
	// A set of local and archival IDs for data sources to refresh. For a data source, either a local or archival data source ID should be specified. The operation will fail if `none` is specified.
	//
	ReaderRefreshDataSourcesRequest shared.ReaderRefreshDataSourcesRequest `request:"mediaType=application/json"`
	// ID assigned to an archival location object.
	LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
}

type RefreshArchivalLocationDataSourcesResponse struct {
	// The request ID for an asynchronous request to refresh archival information.
	//
	AsyncRequestStatus *shared.AsyncRequestStatus
	ContentType        string
	StatusCode         int
	RawResponse        *http.Response
}
