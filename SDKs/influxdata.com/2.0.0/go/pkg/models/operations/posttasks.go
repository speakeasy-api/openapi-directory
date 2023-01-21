package operations

import (
	"openapi/pkg/models/shared"
)

type PostTasksHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostTasksRequest struct {
	Headers PostTasksHeaders
	Request shared.TaskCreateRequest `request:"mediaType=application/json"`
}

type PostTasksResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Task        *shared.Task
}
