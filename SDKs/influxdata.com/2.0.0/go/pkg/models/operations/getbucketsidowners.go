package operations

import (
	"openapi/pkg/models/shared"
)

type GetBucketsIDOwnersPathParams struct {
	BucketID string `pathParam:"style=simple,explode=false,name=bucketID"`
}

type GetBucketsIDOwnersHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetBucketsIDOwnersRequest struct {
	PathParams GetBucketsIDOwnersPathParams
	Headers    GetBucketsIDOwnersHeaders
}

type GetBucketsIDOwnersResponse struct {
	ContentType    string
	Error          *interface{}
	ResourceOwners *shared.ResourceOwners
	StatusCode     int64
}
