package operations

type GetReportsDatesQueryParams struct {
	ReportHash string `queryParam:"style=form,explode=true,name=report_hash"`
}

type GetReportsDatesRequest struct {
	QueryParams GetReportsDatesQueryParams
}

type GetReportsDatesResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FourHundredAndFourError  *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	ReportDates              *interface{}
	StatusCode               int64
}
