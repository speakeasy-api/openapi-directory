package operations

import (
	"openapi/pkg/models/shared"
)

type GetBucketsIDMembersPathParams struct {
	BucketID string `pathParam:"style=simple,explode=false,name=bucketID"`
}

type GetBucketsIDMembersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetBucketsIDMembersRequest struct {
	PathParams GetBucketsIDMembersPathParams
	Headers    GetBucketsIDMembersHeaders
}

type GetBucketsIDMembersResponse struct {
	ContentType     string
	Error           *interface{}
	ResourceMembers *shared.ResourceMembers
	StatusCode      int64
}
