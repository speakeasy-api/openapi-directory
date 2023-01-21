package operations

import (
	"openapi/pkg/models/shared"
)

type GetScrapersIDMembersPathParams struct {
	ScraperTargetID string `pathParam:"style=simple,explode=false,name=scraperTargetID"`
}

type GetScrapersIDMembersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetScrapersIDMembersRequest struct {
	PathParams GetScrapersIDMembersPathParams
	Headers    GetScrapersIDMembersHeaders
}

type GetScrapersIDMembersResponse struct {
	ContentType     string
	Error           *interface{}
	ResourceMembers *shared.ResourceMembers
	StatusCode      int64
}
