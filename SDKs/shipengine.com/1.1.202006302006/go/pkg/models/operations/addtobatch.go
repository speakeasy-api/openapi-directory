package operations

import (
	"openapi/pkg/models/shared"
)

type AddToBatchPathParams struct {
	BatchID string `pathParam:"style=simple,explode=false,name=batch_id"`
}

type AddToBatchRequest struct {
	PathParams AddToBatchPathParams
	Request    shared.AddToBatchRequestBody `request:"mediaType=application/json"`
}

type AddToBatchResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
