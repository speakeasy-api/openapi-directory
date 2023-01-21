package operations

type DeleteAuthorizationsIDPathParams struct {
	AuthID string `pathParam:"style=simple,explode=false,name=authID"`
}

type DeleteAuthorizationsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteAuthorizationsIDRequest struct {
	PathParams DeleteAuthorizationsIDPathParams
	Headers    DeleteAuthorizationsIDHeaders
}

type DeleteAuthorizationsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
