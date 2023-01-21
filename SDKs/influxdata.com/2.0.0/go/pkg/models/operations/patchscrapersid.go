package operations

import (
	"openapi/pkg/models/shared"
)

type PatchScrapersIDPathParams struct {
	ScraperTargetID string `pathParam:"style=simple,explode=false,name=scraperTargetID"`
}

type PatchScrapersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchScrapersIDRequest struct {
	PathParams PatchScrapersIDPathParams
	Headers    PatchScrapersIDHeaders
	Request    shared.ScraperTargetRequest `request:"mediaType=application/json"`
}

type PatchScrapersIDResponse struct {
	ContentType           string
	Error                 *interface{}
	ScraperTargetResponse *shared.ScraperTargetResponse
	StatusCode            int64
}
