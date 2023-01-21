package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTasksIDPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type PatchTasksIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchTasksIDRequest struct {
	PathParams PatchTasksIDPathParams
	Headers    PatchTasksIDHeaders
	Request    shared.TaskUpdateRequest `request:"mediaType=application/json"`
}

type PatchTasksIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Task        *shared.Task
}
