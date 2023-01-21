package operations

import (
	"openapi/pkg/models/shared"
)

type GetTasksIDLogsPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type GetTasksIDLogsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTasksIDLogsRequest struct {
	PathParams GetTasksIDLogsPathParams
	Headers    GetTasksIDLogsHeaders
}

type GetTasksIDLogsResponse struct {
	ContentType string
	Error       *interface{}
	Logs        *shared.Logs
	StatusCode  int64
}
