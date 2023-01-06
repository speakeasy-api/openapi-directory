package operations

import (
	"openapi/pkg/models/shared"
)

type GetBatchByExternalIDPathParams struct {
	ExternalBatchID string `pathParam:"style=simple,explode=false,name=external_batch_id"`
}

type GetBatchByExternalIDRequest struct {
	PathParams GetBatchByExternalIDPathParams
}

type GetBatchByExternalIDResponse struct {
	ContentType                      string
	StatusCode                       int64
	ErrorResponseBody                *shared.ErrorResponseBody
	GetBatchByExternalIDResponseBody *shared.GetBatchByExternalIDResponseBody
}
