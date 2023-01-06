package operations

import (
	"openapi/pkg/models/shared"
)

type GetShipmentByExternalIDPathParams struct {
	ExternalShipmentID string `pathParam:"style=simple,explode=false,name=external_shipment_id"`
}

type GetShipmentByExternalIDRequest struct {
	PathParams GetShipmentByExternalIDPathParams
}

type GetShipmentByExternalIDResponse struct {
	ContentType                         string
	StatusCode                          int64
	ErrorResponseBody                   *shared.ErrorResponseBody
	GetShipmentByExternalIDResponseBody *shared.GetShipmentByExternalIDResponseBody
}
