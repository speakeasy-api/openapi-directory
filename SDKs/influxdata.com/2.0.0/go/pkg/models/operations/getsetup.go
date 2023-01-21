package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetSetupRequest struct {
	Headers GetSetupHeaders
}

type GetSetupResponse struct {
	ContentType  string
	IsOnboarding *shared.IsOnboarding
	StatusCode   int64
}
