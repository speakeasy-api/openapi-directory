package operations

import (
	"openapi/pkg/models/shared"
)

type GetVariablesIDPathParams struct {
	VariableID string `pathParam:"style=simple,explode=false,name=variableID"`
}

type GetVariablesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetVariablesIDRequest struct {
	PathParams GetVariablesIDPathParams
	Headers    GetVariablesIDHeaders
}

type GetVariablesIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Variable    *shared.Variable
}
