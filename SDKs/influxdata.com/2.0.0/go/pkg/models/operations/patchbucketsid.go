package operations

import (
	"openapi/pkg/models/shared"
)

type PatchBucketsIDPathParams struct {
	BucketID string `pathParam:"style=simple,explode=false,name=bucketID"`
}

type PatchBucketsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchBucketsIDRequest struct {
	PathParams PatchBucketsIDPathParams
	Headers    PatchBucketsIDHeaders
	Request    shared.PatchBucketRequest `request:"mediaType=application/json"`
}

type PatchBucketsIDResponse struct {
	Bucket      *interface{}
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
