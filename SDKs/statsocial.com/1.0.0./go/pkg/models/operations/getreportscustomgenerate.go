package operations

type GetReportsCustomGenerateQueryParams struct {
	ReportName string `queryParam:"style=form,explode=true,name=report_name"`
}

type GetReportsCustomGenerateRequest struct {
	QueryParams GetReportsCustomGenerateQueryParams
}

type GetReportsCustomGenerateResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	CustomGenerate           *interface{}
	StatusCode               int64
}
