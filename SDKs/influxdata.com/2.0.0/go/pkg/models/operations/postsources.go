package operations

import (
	"openapi/pkg/models/shared"
)

type PostSourcesHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostSourcesRequest struct {
	Headers PostSourcesHeaders
	Request shared.SourceInput `request:"mediaType=application/json"`
}

type PostSourcesResponse struct {
	ContentType string
	Error       *interface{}
	Source      *shared.Source
	StatusCode  int64
}
