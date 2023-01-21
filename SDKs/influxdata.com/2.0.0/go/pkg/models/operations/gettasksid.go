package operations

import (
	"openapi/pkg/models/shared"
)

type GetTasksIDPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type GetTasksIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTasksIDRequest struct {
	PathParams GetTasksIDPathParams
	Headers    GetTasksIDHeaders
}

type GetTasksIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Task        *shared.Task
}
