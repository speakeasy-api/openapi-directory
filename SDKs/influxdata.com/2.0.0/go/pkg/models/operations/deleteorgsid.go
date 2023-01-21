package operations

type DeleteOrgsIDPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=orgID"`
}

type DeleteOrgsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteOrgsIDRequest struct {
	PathParams DeleteOrgsIDPathParams
	Headers    DeleteOrgsIDHeaders
}

type DeleteOrgsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
