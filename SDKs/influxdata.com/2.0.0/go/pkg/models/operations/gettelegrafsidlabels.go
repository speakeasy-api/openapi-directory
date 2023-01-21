package operations

import (
	"openapi/pkg/models/shared"
)

type GetTelegrafsIDLabelsPathParams struct {
	TelegrafID string `pathParam:"style=simple,explode=false,name=telegrafID"`
}

type GetTelegrafsIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTelegrafsIDLabelsRequest struct {
	PathParams GetTelegrafsIDLabelsPathParams
	Headers    GetTelegrafsIDLabelsHeaders
}

type GetTelegrafsIDLabelsResponse struct {
	ContentType    string
	Error          *interface{}
	LabelsResponse *shared.LabelsResponse
	StatusCode     int64
}
