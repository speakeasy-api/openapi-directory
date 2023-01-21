package operations

import (
	"openapi/pkg/models/shared"
)

type GetTasksIDRunsIDLogsPathParams struct {
	RunID  string `pathParam:"style=simple,explode=false,name=runID"`
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type GetTasksIDRunsIDLogsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTasksIDRunsIDLogsRequest struct {
	PathParams GetTasksIDRunsIDLogsPathParams
	Headers    GetTasksIDRunsIDLogsHeaders
}

type GetTasksIDRunsIDLogsResponse struct {
	ContentType string
	Error       *interface{}
	Logs        *shared.Logs
	StatusCode  int64
}
