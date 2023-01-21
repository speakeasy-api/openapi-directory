package operations

type DeleteTasksIDLabelsIDPathParams struct {
	LabelID string `pathParam:"style=simple,explode=false,name=labelID"`
	TaskID  string `pathParam:"style=simple,explode=false,name=taskID"`
}

type DeleteTasksIDLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteTasksIDLabelsIDRequest struct {
	PathParams DeleteTasksIDLabelsIDPathParams
	Headers    DeleteTasksIDLabelsIDHeaders
}

type DeleteTasksIDLabelsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
