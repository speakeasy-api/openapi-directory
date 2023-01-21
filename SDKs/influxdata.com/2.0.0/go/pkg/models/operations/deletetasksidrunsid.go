package operations

type DeleteTasksIDRunsIDPathParams struct {
	RunID  string `pathParam:"style=simple,explode=false,name=runID"`
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type DeleteTasksIDRunsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteTasksIDRunsIDRequest struct {
	PathParams DeleteTasksIDRunsIDPathParams
	Headers    DeleteTasksIDRunsIDHeaders
}

type DeleteTasksIDRunsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
