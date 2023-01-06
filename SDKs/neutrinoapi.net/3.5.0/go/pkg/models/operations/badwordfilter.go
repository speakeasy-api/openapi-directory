package operations

import (
	"openapi/pkg/models/shared"
)

type BadWordFilterRequestBodyOutputCaseEnum string

const (
	BadWordFilterRequestBodyOutputCaseEnumCamel BadWordFilterRequestBodyOutputCaseEnum = "camel"
)

type BadWordFilterRequestBody struct {
	Catalog         *string                                 `form:"name=catalog"`
	CensorCharacter *string                                 `form:"name=censor-character"`
	Content         string                                  `form:"name=content"`
	OutputCase      *BadWordFilterRequestBodyOutputCaseEnum `form:"name=output-case"`
}

type BadWordFilterRequest struct {
	Request *BadWordFilterRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type BadWordFilterResponse struct {
	APIError              *shared.APIError
	BadWordFilterResponse *shared.BadWordFilterResponse
	ContentType           string
	StatusCode            int64
}
