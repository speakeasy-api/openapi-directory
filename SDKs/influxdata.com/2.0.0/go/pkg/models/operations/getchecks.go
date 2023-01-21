package operations

type GetChecksQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
	OrgID  string `queryParam:"style=form,explode=true,name=orgID"`
}

type GetChecksHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetChecksRequest struct {
	QueryParams GetChecksQueryParams
	Headers     GetChecksHeaders
}

type GetChecksResponse struct {
	Checks      *interface{}
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
