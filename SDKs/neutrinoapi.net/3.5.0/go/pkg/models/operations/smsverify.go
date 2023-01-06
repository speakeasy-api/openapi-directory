package operations

import (
	"openapi/pkg/models/shared"
)

type SmsVerifyRequestBodyOutputCaseEnum string

const (
	SMSVerifyRequestBodyOutputCaseEnumCamel SmsVerifyRequestBodyOutputCaseEnum = "camel"
)

type SmsVerifyRequestBody struct {
	CodeLength   *int32                              `form:"name=code-length"`
	CountryCode  *string                             `form:"name=country-code"`
	LanguageCode *string                             `form:"name=language-code"`
	Limit        *int32                              `form:"name=limit"`
	LimitTTL     *int32                              `form:"name=limit-ttl"`
	Number       string                              `form:"name=number"`
	OutputCase   *SmsVerifyRequestBodyOutputCaseEnum `form:"name=output-case"`
	SecurityCode *int32                              `form:"name=security-code"`
}

type SmsVerifyRequest struct {
	Request *SmsVerifyRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type SmsVerifyResponse struct {
	APIError          *shared.APIError
	ContentType       string
	SMSVerifyResponse *shared.SmsVerifyResponse
	StatusCode        int64
}
