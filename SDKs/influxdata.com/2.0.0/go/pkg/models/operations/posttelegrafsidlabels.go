package operations

import (
	"openapi/pkg/models/shared"
)

type PostTelegrafsIDLabelsPathParams struct {
	TelegrafID string `pathParam:"style=simple,explode=false,name=telegrafID"`
}

type PostTelegrafsIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostTelegrafsIDLabelsRequest struct {
	PathParams PostTelegrafsIDLabelsPathParams
	Headers    PostTelegrafsIDLabelsHeaders
	Request    shared.LabelMapping `request:"mediaType=application/json"`
}

type PostTelegrafsIDLabelsResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
