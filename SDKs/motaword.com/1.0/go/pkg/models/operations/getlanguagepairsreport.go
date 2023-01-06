package operations

import (
	"openapi/pkg/models/shared"
)

type GetLanguagePairsReportRequest struct {
	Request *shared.ReportFilter `request:"mediaType=application/json"`
}

type GetLanguagePairsReportResponse struct {
	ContentType         string
	Error               *shared.Error
	LanguagePairsReport *shared.LanguagePairsReport
	StatusCode          int64
}
