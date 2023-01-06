package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLabelFromRatePathParams struct {
	RateID string `pathParam:"style=simple,explode=false,name=rate_id"`
}

type CreateLabelFromRateRequest struct {
	PathParams CreateLabelFromRatePathParams
	Request    shared.CreateLabelFromRateRequestBody `request:"mediaType=application/json"`
}

type CreateLabelFromRateResponseOutput struct {
	ContentType                     string
	StatusCode                      int64
	CreateLabelFromRateResponseBody *shared.CreateLabelFromRateResponseBodyOutput
	ErrorResponseBody               *shared.ErrorResponseBody
}
