package operations

type DeleteDbrpidPathParams struct {
	DbrpID string `pathParam:"style=simple,explode=false,name=dbrpID"`
}

type DeleteDbrpidQueryParams struct {
	OrgID string `queryParam:"style=form,explode=true,name=orgID"`
}

type DeleteDbrpidHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteDbrpidRequest struct {
	PathParams  DeleteDbrpidPathParams
	QueryParams DeleteDbrpidQueryParams
	Headers     DeleteDbrpidHeaders
}

type DeleteDbrpidResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
