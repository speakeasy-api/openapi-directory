package operations

type GetChecksIDPathParams struct {
	CheckID string `pathParam:"style=simple,explode=false,name=checkID"`
}

type GetChecksIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetChecksIDRequest struct {
	PathParams GetChecksIDPathParams
	Headers    GetChecksIDHeaders
}

type GetChecksIDResponse struct {
	CheckDiscriminator *interface{}
	ContentType        string
	Error              *interface{}
	StatusCode         int64
}
