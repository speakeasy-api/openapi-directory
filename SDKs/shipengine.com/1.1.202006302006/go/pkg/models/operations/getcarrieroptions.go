package operations

import (
	"openapi/pkg/models/shared"
)

type GetCarrierOptionsPathParams struct {
	CarrierID string `pathParam:"style=simple,explode=false,name=carrier_id"`
}

type GetCarrierOptionsRequest struct {
	PathParams GetCarrierOptionsPathParams
}

type GetCarrierOptionsResponse struct {
	ContentType                   string
	StatusCode                    int64
	ErrorResponseBody             *shared.ErrorResponseBody
	GetCarrierOptionsResponseBody *shared.GetCarrierOptionsResponseBody
}
