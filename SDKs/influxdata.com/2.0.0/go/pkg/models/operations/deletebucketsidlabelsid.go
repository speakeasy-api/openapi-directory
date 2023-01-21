package operations

type DeleteBucketsIDLabelsIDPathParams struct {
	BucketID string `pathParam:"style=simple,explode=false,name=bucketID"`
	LabelID  string `pathParam:"style=simple,explode=false,name=labelID"`
}

type DeleteBucketsIDLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteBucketsIDLabelsIDRequest struct {
	PathParams DeleteBucketsIDLabelsIDPathParams
	Headers    DeleteBucketsIDLabelsIDHeaders
}

type DeleteBucketsIDLabelsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
