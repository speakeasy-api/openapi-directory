package operations

import (
	"openapi/pkg/models/shared"
)

type PostLabelsRequest struct {
	Request shared.LabelCreateRequest `request:"mediaType=application/json"`
}

type PostLabelsResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
