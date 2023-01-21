package operations

type DeleteUsersIDPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteUsersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteUsersIDRequest struct {
	PathParams DeleteUsersIDPathParams
	Headers    DeleteUsersIDHeaders
}

type DeleteUsersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
