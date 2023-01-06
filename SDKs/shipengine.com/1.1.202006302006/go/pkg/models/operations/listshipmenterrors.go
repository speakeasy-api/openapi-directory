package operations

import (
	"openapi/pkg/models/shared"
)

type ListShipmentErrorsPathParams struct {
	ShipmentID string `pathParam:"style=simple,explode=false,name=shipment_id"`
}

type ListShipmentErrorsQueryParams struct {
	Page     *int32 `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int32 `queryParam:"style=form,explode=true,name=pagesize"`
}

type ListShipmentErrorsRequest struct {
	PathParams  ListShipmentErrorsPathParams
	QueryParams ListShipmentErrorsQueryParams
}

type ListShipmentErrorsResponse struct {
	ContentType                    string
	StatusCode                     int64
	ErrorResponseBody              *shared.ErrorResponseBody
	ListShipmentErrorsResponseBody *shared.ListShipmentErrorsResponseBody
}
