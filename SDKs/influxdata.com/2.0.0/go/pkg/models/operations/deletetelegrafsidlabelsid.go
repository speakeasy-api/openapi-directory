package operations

type DeleteTelegrafsIDLabelsIDPathParams struct {
	LabelID    string `pathParam:"style=simple,explode=false,name=labelID"`
	TelegrafID string `pathParam:"style=simple,explode=false,name=telegrafID"`
}

type DeleteTelegrafsIDLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteTelegrafsIDLabelsIDRequest struct {
	PathParams DeleteTelegrafsIDLabelsIDPathParams
	Headers    DeleteTelegrafsIDLabelsIDHeaders
}

type DeleteTelegrafsIDLabelsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
