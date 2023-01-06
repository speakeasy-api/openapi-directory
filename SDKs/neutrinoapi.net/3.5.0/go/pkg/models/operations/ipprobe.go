package operations

import (
	"openapi/pkg/models/shared"
)

type IPProbeRequestBodyOutputCaseEnum string

const (
	IPProbeRequestBodyOutputCaseEnumCamel IPProbeRequestBodyOutputCaseEnum = "camel"
)

type IPProbeRequestBody struct {
	IP         string                            `form:"name=ip"`
	OutputCase *IPProbeRequestBodyOutputCaseEnum `form:"name=output-case"`
}

type IPProbeRequest struct {
	Request *IPProbeRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type IPProbeResponse struct {
	APIError        *shared.APIError
	ContentType     string
	IPProbeResponse *shared.IPProbeResponse
	StatusCode      int64
}
