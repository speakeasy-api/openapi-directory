package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsResponse struct {
	ContentType          string
	StatusCode           int64
	ErrorResponseBody    *shared.ErrorResponseBody
	ListTagsResponseBody *shared.ListTagsResponseBody
}
