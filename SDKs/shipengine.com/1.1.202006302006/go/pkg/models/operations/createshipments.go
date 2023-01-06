package operations

import (
	"openapi/pkg/models/shared"
)

type CreateShipmentsRequest struct {
	Request shared.CreateShipmentsRequestBodyInput `request:"mediaType=application/json"`
}

type CreateShipmentsResponse struct {
	ContentType                 string
	StatusCode                  int64
	CreateShipmentsResponseBody *shared.CreateShipmentsResponseBody
	ErrorResponseBody           *shared.ErrorResponseBody
}
