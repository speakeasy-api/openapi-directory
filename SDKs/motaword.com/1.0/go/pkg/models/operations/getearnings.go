package operations

import (
	"openapi/pkg/models/shared"
)

type GetEarningsResponse struct {
	ContentType string
	Earnings    *shared.Earnings
	Error       *shared.Error
	StatusCode  int64
}
