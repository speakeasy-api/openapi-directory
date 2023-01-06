package operations

import (
	"openapi/pkg/models/shared"
)

type EmailValidateRequestBodyOutputCaseEnum string

const (
	EmailValidateRequestBodyOutputCaseEnumCamel EmailValidateRequestBodyOutputCaseEnum = "camel"
)

type EmailValidateRequestBody struct {
	Email      string                                  `form:"name=email"`
	FixTypos   *bool                                   `form:"name=fix-typos"`
	OutputCase *EmailValidateRequestBodyOutputCaseEnum `form:"name=output-case"`
}

type EmailValidateRequest struct {
	Request *EmailValidateRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type EmailValidateResponse struct {
	APIError              *shared.APIError
	ContentType           string
	EmailValidateResponse *shared.EmailValidateResponse
	StatusCode            int64
}
