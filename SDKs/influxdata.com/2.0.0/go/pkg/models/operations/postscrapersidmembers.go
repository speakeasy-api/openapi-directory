package operations

import (
	"openapi/pkg/models/shared"
)

type PostScrapersIDMembersPathParams struct {
	ScraperTargetID string `pathParam:"style=simple,explode=false,name=scraperTargetID"`
}

type PostScrapersIDMembersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostScrapersIDMembersRequest struct {
	PathParams PostScrapersIDMembersPathParams
	Headers    PostScrapersIDMembersHeaders
	Request    shared.AddResourceMemberRequestBody `request:"mediaType=application/json"`
}

type PostScrapersIDMembersResponse struct {
	ContentType    string
	Error          *interface{}
	ResourceMember *shared.ResourceMember
	StatusCode     int64
}
