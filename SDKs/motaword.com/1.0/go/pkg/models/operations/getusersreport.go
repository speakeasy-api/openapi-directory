package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersReportRequest struct {
	Request *shared.ReportFilter `request:"mediaType=application/json"`
}

type GetUsersReportResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	UsersReport *shared.UsersReport
}
