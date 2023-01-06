package operations

import (
	"openapi/pkg/models/shared"
)

type DisconnectCarrierPathParams struct {
	CarrierID   string                 `pathParam:"style=simple,explode=false,name=carrier_id"`
	CarrierName shared.CarrierNameEnum `pathParam:"style=simple,explode=false,name=carrier_name"`
}

type DisconnectCarrierRequest struct {
	PathParams DisconnectCarrierPathParams
}

type DisconnectCarrierResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
