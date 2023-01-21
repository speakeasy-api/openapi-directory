package operations

type DeleteBucketsIDOwnersIDPathParams struct {
	BucketID string `pathParam:"style=simple,explode=false,name=bucketID"`
	UserID   string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteBucketsIDOwnersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteBucketsIDOwnersIDRequest struct {
	PathParams DeleteBucketsIDOwnersIDPathParams
	Headers    DeleteBucketsIDOwnersIDHeaders
}

type DeleteBucketsIDOwnersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
