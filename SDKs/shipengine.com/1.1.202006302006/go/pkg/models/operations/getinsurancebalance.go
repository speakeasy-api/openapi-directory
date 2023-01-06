package operations

import (
	"openapi/pkg/models/shared"
)

type GetInsuranceBalanceResponse struct {
	ContentType                     string
	StatusCode                      int64
	ErrorResponseBody               *shared.ErrorResponseBody
	GetInsuranceBalanceResponseBody *shared.GetInsuranceBalanceResponseBody
}
