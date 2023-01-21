package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostSetupRequest struct {
	Headers PostSetupHeaders
	Request shared.OnboardingRequest `request:"mediaType=application/json"`
}

type PostSetupResponse struct {
	ContentType        string
	Error              *interface{}
	OnboardingResponse *shared.OnboardingResponse
	StatusCode         int64
}
