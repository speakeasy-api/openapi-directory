package operations

import (
	"openapi/pkg/models/shared"
)

type GetBatchByIDPathParams struct {
	BatchID string `pathParam:"style=simple,explode=false,name=batch_id"`
}

type GetBatchByIDRequest struct {
	PathParams GetBatchByIDPathParams
}

type GetBatchByIDResponse struct {
	ContentType              string
	StatusCode               int64
	ErrorResponseBody        *shared.ErrorResponseBody
	GetBatchByIDResponseBody *shared.GetBatchByIDResponseBody
}
