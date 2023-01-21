package operations

import (
	"openapi/pkg/models/shared"
)

type PostScrapersIDLabelsPathParams struct {
	ScraperTargetID string `pathParam:"style=simple,explode=false,name=scraperTargetID"`
}

type PostScrapersIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostScrapersIDLabelsRequest struct {
	PathParams PostScrapersIDLabelsPathParams
	Headers    PostScrapersIDLabelsHeaders
	Request    shared.LabelMapping `request:"mediaType=application/json"`
}

type PostScrapersIDLabelsResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
