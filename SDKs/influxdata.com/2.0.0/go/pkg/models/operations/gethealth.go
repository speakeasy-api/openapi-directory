package operations

import (
	"openapi/pkg/models/shared"
)

var GetHealthServerList = []string{
	"https://",
}

type GetHealthHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetHealthRequest struct {
	ServerURL *string
	Headers   GetHealthHeaders
}

type GetHealthResponse struct {
	ContentType string
	Error       *interface{}
	HealthCheck *shared.HealthCheck
	StatusCode  int64
}
