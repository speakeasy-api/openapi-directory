package operations

import (
	"openapi/pkg/models/shared"
)

var GetReadyServerList = []string{
	"https://",
}

type GetReadyHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetReadyRequest struct {
	ServerURL *string
	Headers   GetReadyHeaders
}

type GetReadyResponse struct {
	ContentType string
	Error       *interface{}
	Ready       *shared.Ready
	StatusCode  int64
}
