package operations

import (
	"openapi/pkg/models/shared"
)

type AddFundsToInsuranceRequest struct {
	Request shared.AddFundsToInsuranceRequestBody `request:"mediaType=application/json"`
}

type AddFundsToInsuranceResponse struct {
	ContentType                     string
	StatusCode                      int64
	AddFundsToInsuranceResponseBody *shared.AddFundsToInsuranceResponseBody
	ErrorResponseBody               *shared.ErrorResponseBody
}
