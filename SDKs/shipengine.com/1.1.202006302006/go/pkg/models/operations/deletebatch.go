package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBatchPathParams struct {
	BatchID string `pathParam:"style=simple,explode=false,name=batch_id"`
}

type DeleteBatchRequest struct {
	PathParams DeleteBatchPathParams
}

type DeleteBatchResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
