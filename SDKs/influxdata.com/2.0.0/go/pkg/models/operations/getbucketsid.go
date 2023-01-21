package operations

type GetBucketsIDPathParams struct {
	BucketID string `pathParam:"style=simple,explode=false,name=bucketID"`
}

type GetBucketsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetBucketsIDRequest struct {
	PathParams GetBucketsIDPathParams
	Headers    GetBucketsIDHeaders
}

type GetBucketsIDResponse struct {
	Bucket      *interface{}
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
