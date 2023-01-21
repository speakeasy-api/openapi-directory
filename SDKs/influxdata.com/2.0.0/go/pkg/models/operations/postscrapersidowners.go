package operations

import (
	"openapi/pkg/models/shared"
)

type PostScrapersIDOwnersPathParams struct {
	ScraperTargetID string `pathParam:"style=simple,explode=false,name=scraperTargetID"`
}

type PostScrapersIDOwnersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostScrapersIDOwnersRequest struct {
	PathParams PostScrapersIDOwnersPathParams
	Headers    PostScrapersIDOwnersHeaders
	Request    shared.AddResourceMemberRequestBody `request:"mediaType=application/json"`
}

type PostScrapersIDOwnersResponse struct {
	ContentType   string
	Error         *interface{}
	ResourceOwner *shared.ResourceOwner
	StatusCode    int64
}
