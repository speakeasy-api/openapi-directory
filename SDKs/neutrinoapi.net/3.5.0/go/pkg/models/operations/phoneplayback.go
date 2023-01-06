package operations

import (
	"openapi/pkg/models/shared"
)

type PhonePlaybackRequestBodyOutputCaseEnum string

const (
	PhonePlaybackRequestBodyOutputCaseEnumCamel PhonePlaybackRequestBodyOutputCaseEnum = "camel"
)

type PhonePlaybackRequestBody struct {
	AudioURL   string                                  `form:"name=audio-url"`
	Limit      *int32                                  `form:"name=limit"`
	LimitTTL   *int32                                  `form:"name=limit-ttl"`
	Number     string                                  `form:"name=number"`
	OutputCase *PhonePlaybackRequestBodyOutputCaseEnum `form:"name=output-case"`
}

type PhonePlaybackRequest struct {
	Request *PhonePlaybackRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type PhonePlaybackResponse struct {
	APIError              *shared.APIError
	ContentType           string
	PhonePlaybackResponse *shared.PhonePlaybackResponse
	StatusCode            int64
}
