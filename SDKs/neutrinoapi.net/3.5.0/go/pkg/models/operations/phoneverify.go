package operations

import (
	"openapi/pkg/models/shared"
)

type PhoneVerifyRequestBodyOutputCaseEnum string

const (
	PhoneVerifyRequestBodyOutputCaseEnumCamel PhoneVerifyRequestBodyOutputCaseEnum = "camel"
)

type PhoneVerifyRequestBody struct {
	CodeLength    *int32                                `form:"name=code-length"`
	CountryCode   *string                               `form:"name=country-code"`
	LanguageCode  *string                               `form:"name=language-code"`
	Limit         *int32                                `form:"name=limit"`
	LimitTTL      *int32                                `form:"name=limit-ttl"`
	Number        string                                `form:"name=number"`
	OutputCase    *PhoneVerifyRequestBodyOutputCaseEnum `form:"name=output-case"`
	PlaybackDelay *int32                                `form:"name=playback-delay"`
	SecurityCode  *int32                                `form:"name=security-code"`
}

type PhoneVerifyRequest struct {
	Request *PhoneVerifyRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type PhoneVerifyResponse struct {
	APIError            *shared.APIError
	ContentType         string
	PhoneVerifyResponse *shared.PhoneVerifyResponse
	StatusCode          int64
}
