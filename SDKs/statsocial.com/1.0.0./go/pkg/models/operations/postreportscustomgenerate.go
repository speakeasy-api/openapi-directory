package operations

type PostReportsCustomGenerateQueryParams struct {
	ReportName string `queryParam:"style=form,explode=true,name=report_name"`
}

type PostReportsCustomGenerateRequest struct {
	QueryParams PostReportsCustomGenerateQueryParams
}

type PostReportsCustomGenerateResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	CustomGenerate           *interface{}
	StatusCode               int64
}
