package operations

import (
	"openapi/pkg/models/shared"
)

type PostScrapersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostScrapersRequest struct {
	Headers PostScrapersHeaders
	Request shared.ScraperTargetRequest `request:"mediaType=application/json"`
}

type PostScrapersResponse struct {
	ContentType           string
	Error                 *interface{}
	ScraperTargetResponse *shared.ScraperTargetResponse
	StatusCode            int64
}
