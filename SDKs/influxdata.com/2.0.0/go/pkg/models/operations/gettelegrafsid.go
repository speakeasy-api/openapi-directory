package operations

import (
	"openapi/pkg/models/shared"
)

type GetTelegrafsIDPathParams struct {
	TelegrafID string `pathParam:"style=simple,explode=false,name=telegrafID"`
}

type GetTelegrafsIDHeaders struct {
	Accept       *shared.TraceSpanEnum5 `header:"style=simple,explode=false,name=Accept"`
	ZapTraceSpan *string                `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTelegrafsIDRequest struct {
	PathParams GetTelegrafsIDPathParams
	Headers    GetTelegrafsIDHeaders
}

type GetTelegrafsIDResponse struct {
	ContentType                                   string
	Error                                         *interface{}
	GetTelegrafsID200ApplicationOctetStreamString *string
	GetTelegrafsID200ApplicationTomlString        *string
	StatusCode                                    int64
	Telegraf                                      *shared.Telegraf
}
