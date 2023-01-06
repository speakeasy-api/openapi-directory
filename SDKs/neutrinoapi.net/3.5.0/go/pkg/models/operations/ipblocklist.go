package operations

import (
	"openapi/pkg/models/shared"
)

type IPBlocklistRequestBodyOutputCaseEnum string

const (
	IPBlocklistRequestBodyOutputCaseEnumCamel IPBlocklistRequestBodyOutputCaseEnum = "camel"
)

type IPBlocklistRequestBody struct {
	IP         string                                `form:"name=ip"`
	OutputCase *IPBlocklistRequestBodyOutputCaseEnum `form:"name=output-case"`
	VpnLookup  *bool                                 `form:"name=vpn-lookup"`
}

type IPBlocklistRequest struct {
	Request *IPBlocklistRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type IPBlocklistResponse struct {
	APIError            *shared.APIError
	ContentType         string
	IPBlocklistResponse *shared.IPBlocklistResponse
	StatusCode          int64
}
