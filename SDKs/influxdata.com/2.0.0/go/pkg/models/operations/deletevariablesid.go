package operations

type DeleteVariablesIDPathParams struct {
	VariableID string `pathParam:"style=simple,explode=false,name=variableID"`
}

type DeleteVariablesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteVariablesIDRequest struct {
	PathParams DeleteVariablesIDPathParams
	Headers    DeleteVariablesIDHeaders
}

type DeleteVariablesIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
