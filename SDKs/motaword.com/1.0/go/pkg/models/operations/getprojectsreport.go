package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectsReportRequest struct {
	Request *shared.ReportFilter `request:"mediaType=application/json"`
}

type GetProjectsReportResponse struct {
	ContentType string
	Error       *shared.Error
	ProjectList *shared.ProjectList
	StatusCode  int64
}
