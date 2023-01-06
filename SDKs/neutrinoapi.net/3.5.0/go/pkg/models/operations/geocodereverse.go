package operations

import (
	"openapi/pkg/models/shared"
)

type GeocodeReverseRequestBodyOutputCaseEnum string

const (
	GeocodeReverseRequestBodyOutputCaseEnumCamel GeocodeReverseRequestBodyOutputCaseEnum = "camel"
)

type GeocodeReverseRequestBody struct {
	LanguageCode *string                                  `form:"name=language-code"`
	Latitude     string                                   `form:"name=latitude"`
	Longitude    string                                   `form:"name=longitude"`
	OutputCase   *GeocodeReverseRequestBodyOutputCaseEnum `form:"name=output-case"`
	Zoom         *string                                  `form:"name=zoom"`
}

type GeocodeReverseRequest struct {
	Request *GeocodeReverseRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type GeocodeReverseResponse struct {
	APIError               *shared.APIError
	ContentType            string
	GeocodeReverseResponse *shared.GeocodeReverseResponse
	StatusCode             int64
}
