package operations

import (
	"openapi/pkg/models/shared"
)

type ParseAddressRequest struct {
	Request shared.ParseAddressRequestBody `request:"mediaType=application/json"`
}

type ParseAddressResponse struct {
	ContentType              string
	StatusCode               int64
	ErrorResponseBody        *shared.ErrorResponseBody
	ParseAddressResponseBody *shared.ParseAddressResponseBody
}
