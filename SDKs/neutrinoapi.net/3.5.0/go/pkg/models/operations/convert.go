package operations

import (
	"openapi/pkg/models/shared"
)

type ConvertRequestBodyOutputCaseEnum string

const (
	ConvertRequestBodyOutputCaseEnumCamel ConvertRequestBodyOutputCaseEnum = "camel"
)

type ConvertRequestBody struct {
	FromType   string                            `form:"name=from-type"`
	FromValue  string                            `form:"name=from-value"`
	OutputCase *ConvertRequestBodyOutputCaseEnum `form:"name=output-case"`
	ToType     string                            `form:"name=to-type"`
}

type ConvertRequest struct {
	Request *ConvertRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type ConvertResponse struct {
	APIError        *shared.APIError
	ContentType     string
	ConvertResponse *shared.ConvertResponse
	StatusCode      int64
}
