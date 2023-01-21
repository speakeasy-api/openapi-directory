package operations

type DeleteTasksIDOwnersIDPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
	UserID string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteTasksIDOwnersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteTasksIDOwnersIDRequest struct {
	PathParams DeleteTasksIDOwnersIDPathParams
	Headers    DeleteTasksIDOwnersIDHeaders
}

type DeleteTasksIDOwnersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
