package operations

import (
	"openapi/pkg/models/shared"
)

type PostChecksIDLabelsPathParams struct {
	CheckID string `pathParam:"style=simple,explode=false,name=checkID"`
}

type PostChecksIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostChecksIDLabelsRequest struct {
	PathParams PostChecksIDLabelsPathParams
	Headers    PostChecksIDLabelsHeaders
	Request    shared.LabelMapping `request:"mediaType=application/json"`
}

type PostChecksIDLabelsResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
