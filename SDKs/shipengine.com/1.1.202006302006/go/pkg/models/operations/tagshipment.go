package operations

import (
	"openapi/pkg/models/shared"
)

type TagShipmentPathParams struct {
	ShipmentID string `pathParam:"style=simple,explode=false,name=shipment_id"`
	TagName    string `pathParam:"style=simple,explode=false,name=tag_name"`
}

type TagShipmentRequest struct {
	PathParams TagShipmentPathParams
}

type TagShipmentResponse struct {
	ContentType             string
	StatusCode              int64
	ErrorResponseBody       *shared.ErrorResponseBody
	TagShipmentResponseBody *shared.TagShipmentResponseBody
}
