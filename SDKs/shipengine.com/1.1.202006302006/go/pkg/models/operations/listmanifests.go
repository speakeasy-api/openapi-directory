package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListManifestsQueryParams struct {
	CarrierID      *string    `queryParam:"style=form,explode=true,name=carrier_id"`
	CreatedAtEnd   *time.Time `queryParam:"style=form,explode=true,name=created_at_end"`
	CreatedAtStart *time.Time `queryParam:"style=form,explode=true,name=created_at_start"`
	LabelIds       []string   `queryParam:"style=form,explode=true,name=label_ids"`
	Page           *int32     `queryParam:"style=form,explode=true,name=page"`
	PageSize       *int32     `queryParam:"style=form,explode=true,name=page_size"`
	ShipDateEnd    *time.Time `queryParam:"style=form,explode=true,name=ship_date_end"`
	ShipDateStart  *time.Time `queryParam:"style=form,explode=true,name=ship_date_start"`
	WarehouseID    *string    `queryParam:"style=form,explode=true,name=warehouse_id"`
}

type ListManifestsRequest struct {
	QueryParams ListManifestsQueryParams
}

type ListManifestsResponse struct {
	ContentType               string
	StatusCode                int64
	ErrorResponseBody         *shared.ErrorResponseBody
	ListManifestsResponseBody *shared.ListManifestsResponseBody
}
