package operations

import (
	"openapi/pkg/models/shared"
)

type PostBucketsIDMembersPathParams struct {
	BucketID string `pathParam:"style=simple,explode=false,name=bucketID"`
}

type PostBucketsIDMembersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostBucketsIDMembersRequest struct {
	PathParams PostBucketsIDMembersPathParams
	Headers    PostBucketsIDMembersHeaders
	Request    shared.AddResourceMemberRequestBody `request:"mediaType=application/json"`
}

type PostBucketsIDMembersResponse struct {
	ContentType    string
	Error          *interface{}
	ResourceMember *shared.ResourceMember
	StatusCode     int64
}
