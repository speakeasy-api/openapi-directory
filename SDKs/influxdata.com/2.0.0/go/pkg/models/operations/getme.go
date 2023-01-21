package operations

type GetMeHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetMeRequest struct {
	Headers GetMeHeaders
}

type GetMeResponse struct {
	ContentType  string
	Error        *interface{}
	StatusCode   int64
	UserResponse *interface{}
}
