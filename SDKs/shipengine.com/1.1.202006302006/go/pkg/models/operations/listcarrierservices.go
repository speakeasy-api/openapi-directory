package operations

import (
	"openapi/pkg/models/shared"
)

type ListCarrierServicesPathParams struct {
	CarrierID string `pathParam:"style=simple,explode=false,name=carrier_id"`
}

type ListCarrierServicesRequest struct {
	PathParams ListCarrierServicesPathParams
}

type ListCarrierServicesResponse struct {
	ContentType                     string
	StatusCode                      int64
	ErrorResponseBody               *shared.ErrorResponseBody
	ListCarrierServicesResponseBody *shared.ListCarrierServicesResponseBody
}
