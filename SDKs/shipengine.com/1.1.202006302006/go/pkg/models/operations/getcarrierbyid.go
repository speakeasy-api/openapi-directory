package operations

import (
	"openapi/pkg/models/shared"
)

type GetCarrierByIDPathParams struct {
	CarrierID string `pathParam:"style=simple,explode=false,name=carrier_id"`
}

type GetCarrierByIDRequest struct {
	PathParams GetCarrierByIDPathParams
}

type GetCarrierByIDResponse struct {
	ContentType                string
	StatusCode                 int64
	ErrorResponseBody          *shared.ErrorResponseBody
	GetCarrierByIDResponseBody *shared.GetCarrierByIDResponseBody
}
