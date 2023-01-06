package operations

import (
	"openapi/pkg/models/shared"
)

type ListWarehousesResponse struct {
	ContentType                string
	StatusCode                 int64
	ErrorResponseBody          *shared.ErrorResponseBody
	ListWarehousesResponseBody *shared.ListWarehousesResponseBody
}
