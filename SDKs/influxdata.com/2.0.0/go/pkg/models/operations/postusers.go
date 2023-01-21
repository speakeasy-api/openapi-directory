package operations

type PostUsersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostUsersRequest struct {
	Headers PostUsersHeaders
	Request interface{} `request:"mediaType=application/json"`
}

type PostUsersResponse struct {
	ContentType  string
	Error        *interface{}
	StatusCode   int64
	UserResponse *interface{}
}
