package operations

import (
	"openapi/pkg/models/shared"
)

type GetTelegrafPluginsQueryParams struct {
	Type *string `queryParam:"style=form,explode=true,name=type"`
}

type GetTelegrafPluginsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetTelegrafPluginsRequest struct {
	QueryParams GetTelegrafPluginsQueryParams
	Headers     GetTelegrafPluginsHeaders
}

type GetTelegrafPluginsResponse struct {
	ContentType     string
	Error           *interface{}
	StatusCode      int64
	TelegrafPlugins *shared.TelegrafPlugins
}
