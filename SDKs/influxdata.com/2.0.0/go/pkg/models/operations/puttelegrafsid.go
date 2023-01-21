package operations

import (
	"openapi/pkg/models/shared"
)

type PutTelegrafsIDPathParams struct {
	TelegrafID string `pathParam:"style=simple,explode=false,name=telegrafID"`
}

type PutTelegrafsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PutTelegrafsIDRequest struct {
	PathParams PutTelegrafsIDPathParams
	Headers    PutTelegrafsIDHeaders
	Request    shared.TelegrafRequest `request:"mediaType=application/json"`
}

type PutTelegrafsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Telegraf    *shared.Telegraf
}
