package operations

type DeleteTasksIDPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
}

type DeleteTasksIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteTasksIDRequest struct {
	PathParams DeleteTasksIDPathParams
	Headers    DeleteTasksIDHeaders
}

type DeleteTasksIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
