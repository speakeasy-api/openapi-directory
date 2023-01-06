package operations

import (
	"openapi/pkg/models/shared"
)

type HostReputationRequestBodyOutputCaseEnum string

const (
	HostReputationRequestBodyOutputCaseEnumCamel HostReputationRequestBodyOutputCaseEnum = "camel"
)

type HostReputationRequestBody struct {
	Host       string                                   `form:"name=host"`
	ListRating *int32                                   `form:"name=list-rating"`
	OutputCase *HostReputationRequestBodyOutputCaseEnum `form:"name=output-case"`
}

type HostReputationRequest struct {
	Request *HostReputationRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type HostReputationResponse struct {
	APIError               *shared.APIError
	ContentType            string
	HostReputationResponse *shared.HostReputationResponse
	StatusCode             int64
}
