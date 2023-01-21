package operations

type DeleteBucketsIDMembersIDPathParams struct {
	BucketID string `pathParam:"style=simple,explode=false,name=bucketID"`
	UserID   string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteBucketsIDMembersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteBucketsIDMembersIDRequest struct {
	PathParams DeleteBucketsIDMembersIDPathParams
	Headers    DeleteBucketsIDMembersIDHeaders
}

type DeleteBucketsIDMembersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
