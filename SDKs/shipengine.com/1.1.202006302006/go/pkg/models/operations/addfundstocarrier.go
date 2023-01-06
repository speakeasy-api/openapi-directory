package operations

import (
	"openapi/pkg/models/shared"
)

type AddFundsToCarrierPathParams struct {
	CarrierID string `pathParam:"style=simple,explode=false,name=carrier_id"`
}

type AddFundsToCarrierRequest struct {
	PathParams AddFundsToCarrierPathParams
	Request    shared.AddFundsToCarrierRequestBody `request:"mediaType=application/json"`
}

type AddFundsToCarrierResponse struct {
	ContentType                   string
	StatusCode                    int64
	AddFundsToCarrierResponseBody *shared.AddFundsToCarrierResponseBody
	ErrorResponseBody             *shared.ErrorResponseBody
}
