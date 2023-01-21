package operations

import (
	"openapi/pkg/models/shared"
)

type PostBucketsIDOwnersPathParams struct {
	BucketID string `pathParam:"style=simple,explode=false,name=bucketID"`
}

type PostBucketsIDOwnersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostBucketsIDOwnersRequest struct {
	PathParams PostBucketsIDOwnersPathParams
	Headers    PostBucketsIDOwnersHeaders
	Request    shared.AddResourceMemberRequestBody `request:"mediaType=application/json"`
}

type PostBucketsIDOwnersResponse struct {
	ContentType   string
	Error         *interface{}
	ResourceOwner *shared.ResourceOwner
	StatusCode    int64
}
