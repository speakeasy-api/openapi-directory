package operations

type DeleteLabelsIDPathParams struct {
	LabelID string `pathParam:"style=simple,explode=false,name=labelID"`
}

type DeleteLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteLabelsIDRequest struct {
	PathParams DeleteLabelsIDPathParams
	Headers    DeleteLabelsIDHeaders
}

type DeleteLabelsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
