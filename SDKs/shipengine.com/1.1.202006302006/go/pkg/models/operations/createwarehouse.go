package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWarehouseRequest struct {
	Request shared.CreateWarehouseRequestBodyInput `request:"mediaType=application/json"`
}

type CreateWarehouseResponse struct {
	ContentType                 string
	StatusCode                  int64
	CreateWarehouseResponseBody *shared.CreateWarehouseResponseBody
	ErrorResponseBody           *shared.ErrorResponseBody
}
