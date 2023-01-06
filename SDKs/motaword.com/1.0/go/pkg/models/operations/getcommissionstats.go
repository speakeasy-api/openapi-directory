package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommissionStatsResponse struct {
	CommissionStats *shared.CommissionStats
	ContentType     string
	Error           *shared.Error
	StatusCode      int64
}
