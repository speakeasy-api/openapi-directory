package operations

import (
	"openapi/pkg/models/shared"
)

type ProcessBatchPathParams struct {
	BatchID string `pathParam:"style=simple,explode=false,name=batch_id"`
}

type ProcessBatchRequest struct {
	PathParams ProcessBatchPathParams
	Request    shared.ProcessBatchRequestBody `request:"mediaType=application/json"`
}

type ProcessBatchResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
