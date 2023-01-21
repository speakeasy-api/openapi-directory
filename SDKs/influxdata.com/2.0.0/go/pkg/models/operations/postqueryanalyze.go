package operations

import (
	"openapi/pkg/models/shared"
)

type PostQueryAnalyzeHeaders struct {
	ContentType  *shared.TraceSpanEnum3 `header:"style=simple,explode=false,name=Content-Type"`
	ZapTraceSpan *string                `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostQueryAnalyzeRequest struct {
	Headers PostQueryAnalyzeHeaders
	Request *shared.Query `request:"mediaType=application/json"`
}

type PostQueryAnalyzeResponse struct {
	AnalyzeQueryResponse *shared.AnalyzeQueryResponse
	ContentType          string
	Error                *interface{}
	Headers              map[string][]string
	StatusCode           int64
}
