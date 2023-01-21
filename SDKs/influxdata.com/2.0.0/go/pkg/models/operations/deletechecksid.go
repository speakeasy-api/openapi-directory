package operations

type DeleteChecksIDPathParams struct {
	CheckID string `pathParam:"style=simple,explode=false,name=checkID"`
}

type DeleteChecksIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteChecksIDRequest struct {
	PathParams DeleteChecksIDPathParams
	Headers    DeleteChecksIDHeaders
}

type DeleteChecksIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
