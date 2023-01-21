package operations

type PostBucketsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostBucketsRequest struct {
	Headers PostBucketsHeaders
	Request interface{} `request:"mediaType=application/json"`
}

type PostBucketsResponse struct {
	Bucket      *interface{}
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
