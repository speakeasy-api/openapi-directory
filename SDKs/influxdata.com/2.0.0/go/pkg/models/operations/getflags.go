package operations

type GetFlagsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetFlagsRequest struct {
	Headers GetFlagsHeaders
}

type GetFlagsResponse struct {
	ContentType string
	Error       *interface{}
	Flags       map[string]interface{}
	StatusCode  int64
}
