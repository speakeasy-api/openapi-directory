package operations

import (
	"openapi/pkg/models/shared"
)

type PostVariablesHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostVariablesRequest struct {
	Headers PostVariablesHeaders
	Request shared.VariableInput `request:"mediaType=application/json"`
}

type PostVariablesResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Variable    *shared.Variable
}
