package operations

type GetOrgsIDPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=orgID"`
}

type GetOrgsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetOrgsIDRequest struct {
	PathParams GetOrgsIDPathParams
	Headers    GetOrgsIDHeaders
}

type GetOrgsIDResponse struct {
	ContentType  string
	Error        *interface{}
	Organization *interface{}
	StatusCode   int64
}
