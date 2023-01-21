package operations

type DeleteTasksIDMembersIDPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskID"`
	UserID string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteTasksIDMembersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteTasksIDMembersIDRequest struct {
	PathParams DeleteTasksIDMembersIDPathParams
	Headers    DeleteTasksIDMembersIDHeaders
}

type DeleteTasksIDMembersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
