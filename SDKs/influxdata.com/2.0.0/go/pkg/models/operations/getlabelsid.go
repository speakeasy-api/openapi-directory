package operations

import (
	"openapi/pkg/models/shared"
)

type GetLabelsIDPathParams struct {
	LabelID string `pathParam:"style=simple,explode=false,name=labelID"`
}

type GetLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetLabelsIDRequest struct {
	PathParams GetLabelsIDPathParams
	Headers    GetLabelsIDHeaders
}

type GetLabelsIDResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
