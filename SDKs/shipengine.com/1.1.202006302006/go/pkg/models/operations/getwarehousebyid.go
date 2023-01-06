package operations

import (
	"openapi/pkg/models/shared"
)

type GetWarehouseByIDPathParams struct {
	WarehouseID string `pathParam:"style=simple,explode=false,name=warehouse_id"`
}

type GetWarehouseByIDRequest struct {
	PathParams GetWarehouseByIDPathParams
}

type GetWarehouseByIDResponse struct {
	ContentType                  string
	StatusCode                   int64
	ErrorResponseBody            *shared.ErrorResponseBody
	GetWarehouseByIDResponseBody *shared.GetWarehouseByIDResponseBody
}
