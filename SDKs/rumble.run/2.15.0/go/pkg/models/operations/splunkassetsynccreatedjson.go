// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type SplunkAssetSyncCreatedJSONSecurity struct {
	BearerAuth string `security:"scheme,type=http,subtype=bearer,name=Authorization"`
}

type SplunkAssetSyncCreatedJSONRequest struct {
	// an optional list of fields to export, comma-separated
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
	// an optional search string for filtering results
	Search *string `queryParam:"style=form,explode=true,name=search"`
	// an optional unix timestamp to use as a checkpoint
	Since *int64 `queryParam:"style=form,explode=true,name=since"`
}

type SplunkAssetSyncCreatedJSONResponse struct {
	// filtered asset results with a checkpoint wrapper
	AssetsWithCheckpoint *shared.AssetsWithCheckpoint
	ContentType          string
	StatusCode           int
	RawResponse          *http.Response
}
