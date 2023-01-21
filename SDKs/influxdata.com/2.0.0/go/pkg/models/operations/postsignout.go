package operations

type PostSignoutHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostSignoutRequest struct {
	Headers PostSignoutHeaders
}

type PostSignoutResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
