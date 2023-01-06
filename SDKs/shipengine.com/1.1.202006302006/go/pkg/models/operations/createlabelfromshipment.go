package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLabelFromShipmentPathParams struct {
	ShipmentID string `pathParam:"style=simple,explode=false,name=shipment_id"`
}

type CreateLabelFromShipmentRequest struct {
	PathParams CreateLabelFromShipmentPathParams
	Request    shared.CreateLabelFromShipmentRequestBody `request:"mediaType=application/json"`
}

type CreateLabelFromShipmentResponseOutput struct {
	ContentType                         string
	StatusCode                          int64
	CreateLabelFromShipmentResponseBody *shared.CreateLabelFromShipmentResponseBodyOutput
	ErrorResponseBody                   *shared.ErrorResponseBody
}
