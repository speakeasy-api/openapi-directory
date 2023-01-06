package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWarehousePathParams struct {
	WarehouseID string `pathParam:"style=simple,explode=false,name=warehouse_id"`
}

type DeleteWarehouseRequest struct {
	PathParams DeleteWarehousePathParams
}

type DeleteWarehouseResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
