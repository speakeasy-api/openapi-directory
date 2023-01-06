package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateShipmentPathParams struct {
	ShipmentID string `pathParam:"style=simple,explode=false,name=shipment_id"`
}

type UpdateShipmentRequest struct {
	PathParams UpdateShipmentPathParams
	Request    shared.UpdateShipmentRequestBody `request:"mediaType=application/json"`
}

type UpdateShipmentResponse struct {
	ContentType                string
	StatusCode                 int64
	ErrorResponseBody          *shared.ErrorResponseBody
	UpdateShipmentResponseBody *shared.UpdateShipmentResponseBody
}
