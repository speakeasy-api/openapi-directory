package operations

import (
	"openapi/pkg/models/shared"
)

type PatchVariablesIDPathParams struct {
	VariableID string `pathParam:"style=simple,explode=false,name=variableID"`
}

type PatchVariablesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PatchVariablesIDRequest struct {
	PathParams PatchVariablesIDPathParams
	Headers    PatchVariablesIDHeaders
	Request    shared.VariableInput `request:"mediaType=application/json"`
}

type PatchVariablesIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Variable    *shared.Variable
}
