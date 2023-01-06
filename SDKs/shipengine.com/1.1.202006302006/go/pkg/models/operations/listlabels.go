package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListLabelsSortByEnum string

const (
	ListLabelsSortByEnumModifiedAt ListLabelsSortByEnum = "modified_at"
	ListLabelsSortByEnumCreatedAt  ListLabelsSortByEnum = "created_at"
)

type ListLabelsQueryParams struct {
	BatchID        *string                 `queryParam:"style=form,explode=true,name=batch_id"`
	CarrierID      *string                 `queryParam:"style=form,explode=true,name=carrier_id"`
	CreatedAtEnd   *time.Time              `queryParam:"style=form,explode=true,name=created_at_end"`
	CreatedAtStart *time.Time              `queryParam:"style=form,explode=true,name=created_at_start"`
	LabelStatus    *shared.LabelStatusEnum `queryParam:"style=form,explode=true,name=label_status"`
	Page           *int32                  `queryParam:"style=form,explode=true,name=page"`
	PageSize       *int32                  `queryParam:"style=form,explode=true,name=page_size"`
	RateID         *string                 `queryParam:"style=form,explode=true,name=rate_id"`
	ServiceCode    *string                 `queryParam:"style=form,explode=true,name=service_code"`
	ShipmentID     *string                 `queryParam:"style=form,explode=true,name=shipment_id"`
	SortBy         *ListLabelsSortByEnum   `queryParam:"style=form,explode=true,name=sort_by"`
	SortDir        map[string]interface{}  `queryParam:"style=form,explode=true,name=sort_dir"`
	TrackingNumber *string                 `queryParam:"style=form,explode=true,name=tracking_number"`
	WarehouseID    *string                 `queryParam:"style=form,explode=true,name=warehouse_id"`
}

type ListLabelsRequest struct {
	QueryParams ListLabelsQueryParams
}

type ListLabelsResponse struct {
	ContentType            string
	StatusCode             int64
	ErrorResponseBody      *shared.ErrorResponseBody
	ListLabelsResponseBody map[string]interface{}
}
