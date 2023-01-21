package operations

import (
	"openapi/pkg/models/shared"
)

type PatchAuthorizationsIDPathParams struct {
	AuthID string `pathParam:"style=simple,explode=false,name=authID"`
}

type PatchAuthorizationsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchAuthorizationsIDRequest struct {
	PathParams PatchAuthorizationsIDPathParams
	Headers    PatchAuthorizationsIDHeaders
	Request    interface{} `request:"mediaType=application/json"`
}

type PatchAuthorizationsIDResponse struct {
	Authorization *shared.Authorization
	ContentType   string
	Error         *interface{}
	StatusCode    int64
}
