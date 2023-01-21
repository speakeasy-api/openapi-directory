package operations

type GetDbrPsQueryParams struct {
	BucketID *string `queryParam:"style=form,explode=true,name=bucketID"`
	Db       *string `queryParam:"style=form,explode=true,name=db"`
	Default  *bool   `queryParam:"style=form,explode=true,name=default"`
	ID       *string `queryParam:"style=form,explode=true,name=id"`
	OrgID    string  `queryParam:"style=form,explode=true,name=orgID"`
	Rp       *string `queryParam:"style=form,explode=true,name=rp"`
}

type GetDbrPsHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type GetDbrPsRequest struct {
	QueryParams GetDbrPsQueryParams
	Headers     GetDbrPsHeaders
}

type GetDbrPsResponse struct {
	ContentType string
	DBRPs       *interface{}
	Error       *interface{}
	StatusCode  int64
}
