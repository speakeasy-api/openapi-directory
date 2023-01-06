package operations

import (
	"openapi/pkg/models/shared"
)

type BrowserBotRequestBodyOutputCaseEnum string

const (
	BrowserBotRequestBodyOutputCaseEnumCamel BrowserBotRequestBodyOutputCaseEnum = "camel"
)

type BrowserBotRequestBody struct {
	Delay                   *int32                               `form:"name=delay"`
	Exec                    []string                             `form:"name=exec"`
	IgnoreCertificateErrors *bool                                `form:"name=ignore-certificate-errors"`
	OutputCase              *BrowserBotRequestBodyOutputCaseEnum `form:"name=output-case"`
	Selector                *string                              `form:"name=selector"`
	Timeout                 *int32                               `form:"name=timeout"`
	URL                     string                               `form:"name=url"`
	UserAgent               *string                              `form:"name=user-agent"`
}

type BrowserBotRequest struct {
	Request *BrowserBotRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type BrowserBotResponse struct {
	APIError           *shared.APIError
	BrowserBotResponse *shared.BrowserBotResponse
	ContentType        string
	StatusCode         int64
}
