package operations

import (
	"openapi/pkg/models/shared"
)

type RenameTagPathParams struct {
	NewTagName string `pathParam:"style=simple,explode=false,name=new_tag_name"`
	TagName    string `pathParam:"style=simple,explode=false,name=tag_name"`
}

type RenameTagRequest struct {
	PathParams RenameTagPathParams
}

type RenameTagResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
