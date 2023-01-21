package operations

import (
	"openapi/pkg/models/shared"
)

type PatchLabelsIDPathParams struct {
	LabelID string `pathParam:"style=simple,explode=false,name=labelID"`
}

type PatchLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchLabelsIDRequest struct {
	PathParams PatchLabelsIDPathParams
	Headers    PatchLabelsIDHeaders
	Request    shared.LabelUpdate `request:"mediaType=application/json"`
}

type PatchLabelsIDResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
