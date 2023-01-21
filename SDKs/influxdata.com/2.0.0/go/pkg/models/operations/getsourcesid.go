package operations

import (
	"openapi/pkg/models/shared"
)

type GetSourcesIDPathParams struct {
	SourceID string `pathParam:"style=simple,explode=false,name=sourceID"`
}

type GetSourcesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetSourcesIDRequest struct {
	PathParams GetSourcesIDPathParams
	Headers    GetSourcesIDHeaders
}

type GetSourcesIDResponse struct {
	ContentType string
	Error       *interface{}
	Source      *shared.Source
	StatusCode  int64
}
