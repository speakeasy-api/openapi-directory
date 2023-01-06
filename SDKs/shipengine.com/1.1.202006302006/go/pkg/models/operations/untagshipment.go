package operations

import (
	"openapi/pkg/models/shared"
)

type UntagShipmentPathParams struct {
	ShipmentID string `pathParam:"style=simple,explode=false,name=shipment_id"`
	TagName    string `pathParam:"style=simple,explode=false,name=tag_name"`
}

type UntagShipmentRequest struct {
	PathParams UntagShipmentPathParams
}

type UntagShipmentResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
