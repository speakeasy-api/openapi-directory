package operations

import (
	"openapi/pkg/models/shared"
)

type GetAuthorizationsIDPathParams struct {
	AuthID string `pathParam:"style=simple,explode=false,name=authID"`
}

type GetAuthorizationsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetAuthorizationsIDRequest struct {
	PathParams GetAuthorizationsIDPathParams
	Headers    GetAuthorizationsIDHeaders
}

type GetAuthorizationsIDResponse struct {
	Authorization *shared.Authorization
	ContentType   string
	Error         *interface{}
	StatusCode    int64
}
