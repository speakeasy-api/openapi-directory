package operations

import (
	"openapi/pkg/models/shared"
)

type VerifySecurityCodeRequestBodyOutputCaseEnum string

const (
	VerifySecurityCodeRequestBodyOutputCaseEnumCamel VerifySecurityCodeRequestBodyOutputCaseEnum = "camel"
)

type VerifySecurityCodeRequestBody struct {
	LimitBy      *string                                      `form:"name=limit-by"`
	OutputCase   *VerifySecurityCodeRequestBodyOutputCaseEnum `form:"name=output-case"`
	SecurityCode string                                       `form:"name=security-code"`
}

type VerifySecurityCodeRequest struct {
	Request *VerifySecurityCodeRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type VerifySecurityCodeResponse struct {
	APIError                   *shared.APIError
	ContentType                string
	StatusCode                 int64
	VerifySecurityCodeResponse *shared.VerifySecurityCodeResponse
}
