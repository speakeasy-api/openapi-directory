package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBatchPathParams struct {
	BatchID string `pathParam:"style=simple,explode=false,name=batch_id"`
}

type UpdateBatchRequest struct {
	PathParams UpdateBatchPathParams
}

type UpdateBatchResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
