package operations

import (
	"openapi/pkg/models/shared"
)

type GetScrapersIDOwnersPathParams struct {
	ScraperTargetID string `pathParam:"style=simple,explode=false,name=scraperTargetID"`
}

type GetScrapersIDOwnersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetScrapersIDOwnersRequest struct {
	PathParams GetScrapersIDOwnersPathParams
	Headers    GetScrapersIDOwnersHeaders
}

type GetScrapersIDOwnersResponse struct {
	ContentType    string
	Error          *interface{}
	ResourceOwners *shared.ResourceOwners
	StatusCode     int64
}
