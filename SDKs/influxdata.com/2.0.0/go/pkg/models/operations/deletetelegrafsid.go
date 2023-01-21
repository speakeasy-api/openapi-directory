package operations

type DeleteTelegrafsIDPathParams struct {
	TelegrafID string `pathParam:"style=simple,explode=false,name=telegrafID"`
}

type DeleteTelegrafsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteTelegrafsIDRequest struct {
	PathParams DeleteTelegrafsIDPathParams
	Headers    DeleteTelegrafsIDHeaders
}

type DeleteTelegrafsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
