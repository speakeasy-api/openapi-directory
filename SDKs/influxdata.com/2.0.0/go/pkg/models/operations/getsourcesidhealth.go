package operations

import (
	"openapi/pkg/models/shared"
)

type GetSourcesIDHealthPathParams struct {
	SourceID string `pathParam:"style=simple,explode=false,name=sourceID"`
}

type GetSourcesIDHealthHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetSourcesIDHealthRequest struct {
	PathParams GetSourcesIDHealthPathParams
	Headers    GetSourcesIDHealthHeaders
}

type GetSourcesIDHealthResponse struct {
	ContentType string
	Error       *interface{}
	HealthCheck *shared.HealthCheck
	StatusCode  int64
}
