package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWarehousePathParams struct {
	WarehouseID string `pathParam:"style=simple,explode=false,name=warehouse_id"`
}

type UpdateWarehouseRequest struct {
	PathParams UpdateWarehousePathParams
	Request    shared.UpdateWarehouseRequestBodyInput `request:"mediaType=application/json"`
}

type UpdateWarehouseResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
