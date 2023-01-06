package operations

import (
	"openapi/pkg/models/shared"
)

type CancelShipmentsPathParams struct {
	ShipmentID string `pathParam:"style=simple,explode=false,name=shipment_id"`
}

type CancelShipmentsRequest struct {
	PathParams CancelShipmentsPathParams
}

type CancelShipmentsResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
