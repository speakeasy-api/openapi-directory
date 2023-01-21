package operations

import (
	"openapi/pkg/models/shared"
)

type PutVariablesIDPathParams struct {
	VariableID string `pathParam:"style=simple,explode=false,name=variableID"`
}

type PutVariablesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PutVariablesIDRequest struct {
	PathParams PutVariablesIDPathParams
	Headers    PutVariablesIDHeaders
	Request    shared.VariableInput `request:"mediaType=application/json"`
}

type PutVariablesIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Variable    *shared.Variable
}
