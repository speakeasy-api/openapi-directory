package operations

import (
	"openapi/pkg/models/shared"
)

type GetShipmentByIDPathParams struct {
	ShipmentID string `pathParam:"style=simple,explode=false,name=shipment_id"`
}

type GetShipmentByIDRequest struct {
	PathParams GetShipmentByIDPathParams
}

type GetShipmentByIDResponse struct {
	ContentType                 string
	StatusCode                  int64
	ErrorResponseBody           *shared.ErrorResponseBody
	GetShipmentByIDResponseBody *shared.GetShipmentByIDResponseBody
}
