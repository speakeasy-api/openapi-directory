package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommissionsByFilterRequest struct {
	Request *shared.ReportFilter `request:"mediaType=application/json"`
}

type GetCommissionsByFilterResponse struct {
	CommissionList *shared.CommissionList
	ContentType    string
	Error          *shared.Error
	StatusCode     int64
}
