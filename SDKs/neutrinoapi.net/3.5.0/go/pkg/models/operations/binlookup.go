package operations

import (
	"openapi/pkg/models/shared"
)

type BinLookupRequestBodyOutputCaseEnum string

const (
	BINLookupRequestBodyOutputCaseEnumCamel BinLookupRequestBodyOutputCaseEnum = "camel"
)

type BinLookupRequestBody struct {
	BinNumber  string                              `form:"name=bin-number"`
	CustomerIP *string                             `form:"name=customer-ip"`
	OutputCase *BinLookupRequestBodyOutputCaseEnum `form:"name=output-case"`
}

type BinLookupRequest struct {
	Request *BinLookupRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type BinLookupResponse struct {
	APIError          *shared.APIError
	BINLookupResponse *shared.BinLookupResponse
	ContentType       string
	StatusCode        int64
}
