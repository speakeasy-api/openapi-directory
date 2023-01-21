package operations

import (
	"openapi/pkg/models/shared"
)

type PostDbrpHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostDbrpRequest struct {
	Headers PostDbrpHeaders
	Request shared.DbrpInput `request:"mediaType=application/json"`
}

type PostDbrpResponse struct {
	ContentType string
	DBRP        *shared.Dbrp
	Error       *interface{}
	StatusCode  int64
}
