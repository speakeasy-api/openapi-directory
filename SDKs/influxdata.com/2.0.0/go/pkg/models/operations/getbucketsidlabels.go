package operations

import (
	"openapi/pkg/models/shared"
)

type GetBucketsIDLabelsPathParams struct {
	BucketID string `pathParam:"style=simple,explode=false,name=bucketID"`
}

type GetBucketsIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetBucketsIDLabelsRequest struct {
	PathParams GetBucketsIDLabelsPathParams
	Headers    GetBucketsIDLabelsHeaders
}

type GetBucketsIDLabelsResponse struct {
	ContentType    string
	Error          *interface{}
	LabelsResponse *shared.LabelsResponse
	StatusCode     int64
}
