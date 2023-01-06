package operations

import (
	"openapi/pkg/models/shared"
)

type IPInfoRequestBodyOutputCaseEnum string

const (
	IPInfoRequestBodyOutputCaseEnumCamel IPInfoRequestBodyOutputCaseEnum = "camel"
)

type IPInfoRequestBody struct {
	IP            string                           `form:"name=ip"`
	OutputCase    *IPInfoRequestBodyOutputCaseEnum `form:"name=output-case"`
	ReverseLookup *bool                            `form:"name=reverse-lookup"`
}

type IPInfoRequest struct {
	Request *IPInfoRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type IPInfoResponse struct {
	APIError       *shared.APIError
	ContentType    string
	IPInfoResponse *shared.IPInfoResponse
	StatusCode     int64
}
