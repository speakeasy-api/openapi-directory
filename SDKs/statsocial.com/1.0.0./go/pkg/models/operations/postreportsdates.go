package operations

type PostReportsDatesQueryParams struct {
	ReportHash string `queryParam:"style=form,explode=true,name=report_hash"`
}

type PostReportsDatesRequest struct {
	QueryParams PostReportsDatesQueryParams
}

type PostReportsDatesResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FourHundredAndFourError  *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	ReportDates              *interface{}
	StatusCode               int64
}
