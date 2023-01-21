package operations

import (
	"openapi/pkg/models/shared"
)

type GetScrapersIDPathParams struct {
	ScraperTargetID string `pathParam:"style=simple,explode=false,name=scraperTargetID"`
}

type GetScrapersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetScrapersIDRequest struct {
	PathParams GetScrapersIDPathParams
	Headers    GetScrapersIDHeaders
}

type GetScrapersIDResponse struct {
	ContentType           string
	Error                 *interface{}
	ScraperTargetResponse *shared.ScraperTargetResponse
	StatusCode            int64
}
