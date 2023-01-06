package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListShipmentsQueryParams struct {
	BatchID         *string                     `queryParam:"style=form,explode=true,name=batch_id"`
	CreatedAtEnd    *time.Time                  `queryParam:"style=form,explode=true,name=created_at_end"`
	CreatedAtStart  *time.Time                  `queryParam:"style=form,explode=true,name=created_at_start"`
	ModifiedAtEnd   *time.Time                  `queryParam:"style=form,explode=true,name=modified_at_end"`
	ModifiedAtStart *time.Time                  `queryParam:"style=form,explode=true,name=modified_at_start"`
	Page            *int32                      `queryParam:"style=form,explode=true,name=page"`
	PageSize        *int32                      `queryParam:"style=form,explode=true,name=page_size"`
	SalesOrderID    *string                     `queryParam:"style=form,explode=true,name=sales_order_id"`
	ShipmentStatus  *shared.ShipmentStatusEnum  `queryParam:"style=form,explode=true,name=shipment_status"`
	SortBy          *shared.ShipmentsSortByEnum `queryParam:"style=form,explode=true,name=sort_by"`
	SortDir         map[string]interface{}      `queryParam:"style=form,explode=true,name=sort_dir"`
	Tag             *string                     `queryParam:"style=form,explode=true,name=tag"`
}

type ListShipmentsRequest struct {
	QueryParams ListShipmentsQueryParams
}

type ListShipmentsResponse struct {
	ContentType               string
	StatusCode                int64
	ErrorResponseBody         *shared.ErrorResponseBody
	ListShipmentsResponseBody *shared.ListShipmentsResponseBody
}
