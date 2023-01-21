package operations

type DeleteBucketsIDPathParams struct {
	BucketID string `pathParam:"style=simple,explode=false,name=bucketID"`
}

type DeleteBucketsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteBucketsIDRequest struct {
	PathParams DeleteBucketsIDPathParams
	Headers    DeleteBucketsIDHeaders
}

type DeleteBucketsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
