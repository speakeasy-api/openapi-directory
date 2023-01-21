package operations

import (
	"openapi/pkg/models/shared"
)

type GetSourcesQueryParams struct {
	Org *string `queryParam:"style=form,explode=true,name=org"`
}

type GetSourcesHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetSourcesRequest struct {
	QueryParams GetSourcesQueryParams
	Headers     GetSourcesHeaders
}

type GetSourcesResponse struct {
	ContentType string
	Error       *interface{}
	Sources     *shared.Sources
	StatusCode  int64
}
