package operations

import (
	"openapi/pkg/models/shared"
)

type PostVariablesIDLabelsPathParams struct {
	VariableID string `pathParam:"style=simple,explode=false,name=variableID"`
}

type PostVariablesIDLabelsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type PostVariablesIDLabelsRequest struct {
	PathParams PostVariablesIDLabelsPathParams
	Headers    PostVariablesIDLabelsHeaders
	Request    shared.LabelMapping `request:"mediaType=application/json"`
}

type PostVariablesIDLabelsResponse struct {
	ContentType   string
	Error         *interface{}
	LabelResponse *shared.LabelResponse
	StatusCode    int64
}
