package operations

import (
	"openapi/pkg/models/shared"
)

type ValidateAddressRequest struct {
	Request []shared.AddressToValidate `request:"mediaType=application/json"`
}

type ValidateAddressResponse struct {
	ContentType                 string
	StatusCode                  int64
	ErrorResponseBody           *shared.ErrorResponseBody
	ValidateAddressResponseBody []shared.ValidateAddressResponseBody
}
