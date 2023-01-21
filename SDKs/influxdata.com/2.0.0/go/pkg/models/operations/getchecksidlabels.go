package operations

import (
	"openapi/pkg/models/shared"
)

type GetChecksIDLabelsPathParams struct {
	CheckID string `pathParam:"style=simple,explode=false,name=checkID"`
}

type GetChecksIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetChecksIDLabelsRequest struct {
	PathParams GetChecksIDLabelsPathParams
	Headers    GetChecksIDLabelsHeaders
}

type GetChecksIDLabelsResponse struct {
	ContentType    string
	Error          *interface{}
	LabelsResponse *shared.LabelsResponse
	StatusCode     int64
}
