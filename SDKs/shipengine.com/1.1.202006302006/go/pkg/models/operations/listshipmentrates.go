package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListShipmentRatesPathParams struct {
	ShipmentID string `pathParam:"style=simple,explode=false,name=shipment_id"`
}

type ListShipmentRatesQueryParams struct {
	CreatedAtStart *time.Time `queryParam:"style=form,explode=true,name=created_at_start"`
}

type ListShipmentRatesRequest struct {
	PathParams  ListShipmentRatesPathParams
	QueryParams ListShipmentRatesQueryParams
}

type ListShipmentRatesResponse struct {
	ContentType                   string
	StatusCode                    int64
	ErrorResponseBody             *shared.ErrorResponseBody
	ListShipmentRatesResponseBody *shared.ListShipmentRatesResponseBody
}
