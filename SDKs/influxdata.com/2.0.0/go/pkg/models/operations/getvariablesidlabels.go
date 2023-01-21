package operations

import (
	"openapi/pkg/models/shared"
)

type GetVariablesIDLabelsPathParams struct {
	VariableID string `pathParam:"style=simple,explode=false,name=variableID"`
}

type GetVariablesIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetVariablesIDLabelsRequest struct {
	PathParams GetVariablesIDLabelsPathParams
	Headers    GetVariablesIDLabelsHeaders
}

type GetVariablesIDLabelsResponse struct {
	ContentType    string
	Error          *interface{}
	LabelsResponse *shared.LabelsResponse
	StatusCode     int64
}
