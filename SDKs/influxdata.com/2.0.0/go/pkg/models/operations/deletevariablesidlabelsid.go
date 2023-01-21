package operations

type DeleteVariablesIDLabelsIDPathParams struct {
	LabelID    string `pathParam:"style=simple,explode=false,name=labelID"`
	VariableID string `pathParam:"style=simple,explode=false,name=variableID"`
}

type DeleteVariablesIDLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteVariablesIDLabelsIDRequest struct {
	PathParams DeleteVariablesIDLabelsIDPathParams
	Headers    DeleteVariablesIDLabelsIDHeaders
}

type DeleteVariablesIDLabelsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
