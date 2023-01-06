package operations

import (
	"openapi/pkg/models/shared"
)

type URLInfoRequestBodyOutputCaseEnum string

const (
	URLInfoRequestBodyOutputCaseEnumCamel URLInfoRequestBodyOutputCaseEnum = "camel"
)

type URLInfoRequestBody struct {
	FetchContent            *bool                             `form:"name=fetch-content"`
	IgnoreCertificateErrors *bool                             `form:"name=ignore-certificate-errors"`
	OutputCase              *URLInfoRequestBodyOutputCaseEnum `form:"name=output-case"`
	Retry                   *int32                            `form:"name=retry"`
	Timeout                 *int32                            `form:"name=timeout"`
	URL                     string                            `form:"name=url"`
}

type URLInfoRequest struct {
	Request *URLInfoRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type URLInfoResponse struct {
	APIError        *shared.APIError
	ContentType     string
	StatusCode      int64
	URLInfoResponse *shared.URLInfoResponse
}
