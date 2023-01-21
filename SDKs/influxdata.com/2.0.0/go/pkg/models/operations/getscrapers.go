package operations

import (
	"openapi/pkg/models/shared"
)

type GetScrapersQueryParams struct {
	ID    []string `queryParam:"style=form,explode=true,name=id"`
	Name  *string  `queryParam:"style=form,explode=true,name=name"`
	Org   *string  `queryParam:"style=form,explode=true,name=org"`
	OrgID *string  `queryParam:"style=form,explode=true,name=orgID"`
}

type GetScrapersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetScrapersRequest struct {
	QueryParams GetScrapersQueryParams
	Headers     GetScrapersHeaders
}

type GetScrapersResponse struct {
	ContentType            string
	ScraperTargetResponses *shared.ScraperTargetResponses
	StatusCode             int64
}
