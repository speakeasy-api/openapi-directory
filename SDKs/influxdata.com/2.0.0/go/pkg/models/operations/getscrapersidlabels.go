package operations

import (
	"openapi/pkg/models/shared"
)

type GetScrapersIDLabelsPathParams struct {
	ScraperTargetID string `pathParam:"style=simple,explode=false,name=scraperTargetID"`
}

type GetScrapersIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetScrapersIDLabelsRequest struct {
	PathParams GetScrapersIDLabelsPathParams
	Headers    GetScrapersIDLabelsHeaders
}

type GetScrapersIDLabelsResponse struct {
	ContentType    string
	Error          *interface{}
	LabelsResponse *shared.LabelsResponse
	StatusCode     int64
}
