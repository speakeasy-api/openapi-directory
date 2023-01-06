package operations

import (
	"openapi/pkg/models/shared"
)

type HlrLookupRequestBodyOutputCaseEnum string

const (
	HLRLookupRequestBodyOutputCaseEnumCamel HlrLookupRequestBodyOutputCaseEnum = "camel"
)

type HlrLookupRequestBody struct {
	CountryCode *string                             `form:"name=country-code"`
	Number      string                              `form:"name=number"`
	OutputCase  *HlrLookupRequestBodyOutputCaseEnum `form:"name=output-case"`
}

type HlrLookupRequest struct {
	Request *HlrLookupRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type HlrLookupResponse struct {
	APIError          *shared.APIError
	ContentType       string
	HLRLookupResponse *shared.HlrLookupResponse
	StatusCode        int64
}
