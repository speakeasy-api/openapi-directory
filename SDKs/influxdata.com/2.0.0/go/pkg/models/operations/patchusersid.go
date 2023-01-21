package operations

type PatchUsersIDPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userID"`
}

type PatchUsersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchUsersIDRequest struct {
	PathParams PatchUsersIDPathParams
	Headers    PatchUsersIDHeaders
	Request    interface{} `request:"mediaType=application/json"`
}

type PatchUsersIDResponse struct {
	ContentType  string
	Error        *interface{}
	StatusCode   int64
	UserResponse *interface{}
}
