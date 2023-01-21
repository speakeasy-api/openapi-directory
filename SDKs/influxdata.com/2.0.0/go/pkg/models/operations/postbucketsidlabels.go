package operations

import (
	"openapi/pkg/models/shared"
)

type PostBucketsIDLabelsPathParams struct {
	BucketID string `pathParam:"style=simple,explode=false,name=bucketID"`
}

type PostBucketsIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostBucketsIDLabelsRequest struct {
	PathParams PostBucketsIDLabelsPathParams
	Headers    PostBucketsIDLabelsHeaders
	Request    shared.LabelMapping `request:"mediaType=application/json"`
}

type PostBucketsIDLabelsResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
