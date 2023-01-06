package operations

import (
	"openapi/pkg/models/shared"
)

type GetRateByIDPathParams struct {
	RateID string `pathParam:"style=simple,explode=false,name=rate_id"`
}

type GetRateByIDRequest struct {
	PathParams GetRateByIDPathParams
}

type GetRateByIDResponse struct {
	ContentType             string
	StatusCode              int64
	ErrorResponseBody       *shared.ErrorResponseBody
	GetRateByIDResponseBody *shared.GetRateByIDResponseBody
}
