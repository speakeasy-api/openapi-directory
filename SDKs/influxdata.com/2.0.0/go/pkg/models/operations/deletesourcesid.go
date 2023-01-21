package operations

type DeleteSourcesIDPathParams struct {
	SourceID string `pathParam:"style=simple,explode=false,name=sourceID"`
}

type DeleteSourcesIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteSourcesIDRequest struct {
	PathParams DeleteSourcesIDPathParams
	Headers    DeleteSourcesIDHeaders
}

type DeleteSourcesIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
