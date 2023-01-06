package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectCarrierPathParams struct {
	CarrierName shared.CarrierNameEnum `pathParam:"style=simple,explode=false,name=carrier_name"`
}

type ConnectCarrierRequest struct {
	PathParams ConnectCarrierPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type ConnectCarrierResponse struct {
	ContentType                string
	StatusCode                 int64
	ConnectCarrierResponseBody *shared.ConnectCarrierResponseBody
	ErrorResponseBody          *shared.ErrorResponseBody
}
