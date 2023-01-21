package operations

type GetUsersIDPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userID"`
}

type GetUsersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetUsersIDRequest struct {
	PathParams GetUsersIDPathParams
	Headers    GetUsersIDHeaders
}

type GetUsersIDResponse struct {
	ContentType  string
	Error        *interface{}
	StatusCode   int64
	UserResponse *interface{}
}
