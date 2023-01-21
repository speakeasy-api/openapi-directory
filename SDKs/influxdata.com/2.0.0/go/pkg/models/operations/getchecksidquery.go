package operations

type GetChecksIDQueryPathParams struct {
	CheckID string `pathParam:"style=simple,explode=false,name=checkID"`
}

type GetChecksIDQueryHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetChecksIDQueryRequest struct {
	PathParams GetChecksIDQueryPathParams
	Headers    GetChecksIDQueryHeaders
}

type GetChecksIDQueryResponse struct {
	ContentType  string
	Error        *interface{}
	FluxResponse *interface{}
	StatusCode   int64
}
