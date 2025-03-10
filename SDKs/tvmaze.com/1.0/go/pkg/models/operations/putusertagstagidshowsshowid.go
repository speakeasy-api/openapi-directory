// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PutUserTagsTagIDShowsShowIDRequest struct {
	ShowID int64 `pathParam:"style=simple,explode=false,name=show_id"`
	TagID  int64 `pathParam:"style=simple,explode=false,name=tag_id"`
}

type PutUserTagsTagIDShowsShowIDResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// The show was tagged
	TagInstance *shared.TagInstance
}
