package callbacks

import (
	"openapi/pkg/models/shared"
)

type FinalReportRequest struct {
	Request shared.FinalReport `request:"mediaType=application/json"`
}

type FinalReportResponse struct {
	ContentType string
	StatusCode  int64
}
