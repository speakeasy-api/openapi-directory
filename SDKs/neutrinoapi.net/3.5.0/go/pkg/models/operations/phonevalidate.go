package operations

import (
	"openapi/pkg/models/shared"
)

type PhoneValidateRequestBodyOutputCaseEnum string

const (
	PhoneValidateRequestBodyOutputCaseEnumCamel PhoneValidateRequestBodyOutputCaseEnum = "camel"
)

type PhoneValidateRequestBody struct {
	CountryCode *string                                 `form:"name=country-code"`
	IP          *string                                 `form:"name=ip"`
	Number      string                                  `form:"name=number"`
	OutputCase  *PhoneValidateRequestBodyOutputCaseEnum `form:"name=output-case"`
}

type PhoneValidateRequest struct {
	Request *PhoneValidateRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type PhoneValidateResponse struct {
	APIError              *shared.APIError
	ContentType           string
	PhoneValidateResponse *shared.PhoneValidateResponse
	StatusCode            int64
}
