package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveFromBatchPathParams struct {
	BatchID string `pathParam:"style=simple,explode=false,name=batch_id"`
}

type RemoveFromBatchRequest struct {
	PathParams RemoveFromBatchPathParams
	Request    shared.RemoveFromBatchRequestBody `request:"mediaType=application/json"`
}

type RemoveFromBatchResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
