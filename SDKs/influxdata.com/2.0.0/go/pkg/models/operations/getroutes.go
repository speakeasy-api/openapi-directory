package operations

type GetRoutesHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetRoutesRequest struct {
	Headers GetRoutesHeaders
}

type GetRoutesResponse struct {
	ContentType string
	Routes      *interface{}
	StatusCode  int64
}
