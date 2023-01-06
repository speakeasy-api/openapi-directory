package operations

import (
	"openapi/pkg/models/shared"
)

type UserAgentInfoRequestBodyOutputCaseEnum string

const (
	UserAgentInfoRequestBodyOutputCaseEnumCamel UserAgentInfoRequestBodyOutputCaseEnum = "camel"
)

type UserAgentInfoRequestBody struct {
	OutputCase *UserAgentInfoRequestBodyOutputCaseEnum `form:"name=output-case"`
	UserAgent  string                                  `form:"name=user-agent"`
}

type UserAgentInfoRequest struct {
	Request *UserAgentInfoRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type UserAgentInfoResponse struct {
	APIError              *shared.APIError
	ContentType           string
	StatusCode            int64
	UserAgentInfoResponse *shared.UserAgentInfoResponse
}
