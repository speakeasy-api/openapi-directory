package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTagPathParams struct {
	TagName string `pathParam:"style=simple,explode=false,name=tag_name"`
}

type DeleteTagRequest struct {
	PathParams DeleteTagPathParams
}

type DeleteTagResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
