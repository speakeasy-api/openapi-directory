package operations

import (
	"openapi/pkg/models/shared"
)

type EmailVerifyRequestBodyOutputCaseEnum string

const (
	EmailVerifyRequestBodyOutputCaseEnumCamel EmailVerifyRequestBodyOutputCaseEnum = "camel"
)

type EmailVerifyRequestBody struct {
	Email      string                                `form:"name=email"`
	FixTypos   *bool                                 `form:"name=fix-typos"`
	OutputCase *EmailVerifyRequestBodyOutputCaseEnum `form:"name=output-case"`
}

type EmailVerifyRequest struct {
	Request *EmailVerifyRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type EmailVerifyResponse struct {
	APIError            *shared.APIError
	ContentType         string
	EmailVerifyResponse *shared.EmailVerifyResponse
	StatusCode          int64
}
