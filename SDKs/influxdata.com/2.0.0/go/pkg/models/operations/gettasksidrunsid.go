package operations

type GetTasksIDRunsIDPathParams struct {
	RunID  string `pathParam:"style=simple,explode=false,name=runID"`
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type GetTasksIDRunsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTasksIDRunsIDRequest struct {
	PathParams GetTasksIDRunsIDPathParams
	Headers    GetTasksIDRunsIDHeaders
}

type GetTasksIDRunsIDResponse struct {
	ContentType string
	Error       *interface{}
	Run         *interface{}
	StatusCode  int64
}
