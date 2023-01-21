package operations

type DeleteChecksIDLabelsIDPathParams struct {
	CheckID string `pathParam:"style=simple,explode=false,name=checkID"`
	LabelID string `pathParam:"style=simple,explode=false,name=labelID"`
}

type DeleteChecksIDLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteChecksIDLabelsIDRequest struct {
	PathParams DeleteChecksIDLabelsIDPathParams
	Headers    DeleteChecksIDLabelsIDHeaders
}

type DeleteChecksIDLabelsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
