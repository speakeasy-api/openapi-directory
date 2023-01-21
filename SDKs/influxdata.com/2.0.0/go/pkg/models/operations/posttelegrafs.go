package operations

import (
	"openapi/pkg/models/shared"
)

type PostTelegrafsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostTelegrafsRequest struct {
	Headers PostTelegrafsHeaders
	Request shared.TelegrafRequest `request:"mediaType=application/json"`
}

type PostTelegrafsResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Telegraf    *shared.Telegraf
}
