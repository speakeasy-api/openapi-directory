package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBatchRequest struct {
	Request shared.CreateBatchRequestBody `request:"mediaType=application/json"`
}

type CreateBatchResponse struct {
	ContentType             string
	StatusCode              int64
	CreateBatchResponseBody *shared.CreateBatchResponseBody
	ErrorResponseBody       *shared.ErrorResponseBody
}
