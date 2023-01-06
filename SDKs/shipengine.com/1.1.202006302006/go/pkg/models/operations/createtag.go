package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTagPathParams struct {
	TagName string `pathParam:"style=simple,explode=false,name=tag_name"`
}

type CreateTagRequest struct {
	PathParams CreateTagPathParams
}

type CreateTagResponse struct {
	ContentType           string
	StatusCode            int64
	CreateTagResponseBody *shared.CreateTagResponseBody
	ErrorResponseBody     *shared.ErrorResponseBody
}
