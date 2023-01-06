package operations

import (
	"openapi/pkg/models/shared"
)

type SmsMessageRequestBodyOutputCaseEnum string

const (
	SMSMessageRequestBodyOutputCaseEnumCamel SmsMessageRequestBodyOutputCaseEnum = "camel"
)

type SmsMessageRequestBody struct {
	CountryCode *string                              `form:"name=country-code"`
	Limit       *int32                               `form:"name=limit"`
	LimitTTL    *int32                               `form:"name=limit-ttl"`
	Message     string                               `form:"name=message"`
	Number      string                               `form:"name=number"`
	OutputCase  *SmsMessageRequestBodyOutputCaseEnum `form:"name=output-case"`
}

type SmsMessageRequest struct {
	Request *SmsMessageRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type SmsMessageResponse struct {
	APIError           *shared.APIError
	ContentType        string
	SMSMessageResponse *shared.SmsMessageResponse
	StatusCode         int64
}
