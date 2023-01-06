package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommissionStatsByFilterRequest struct {
	Request *shared.ReportFilter `request:"mediaType=application/json"`
}

type GetCommissionStatsByFilterResponse struct {
	CommissionStats *shared.CommissionStats
	ContentType     string
	Error           *shared.Error
	StatusCode      int64
}
