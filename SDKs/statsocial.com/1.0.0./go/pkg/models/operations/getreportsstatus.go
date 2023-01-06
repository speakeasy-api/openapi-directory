package operations

type GetReportsStatusQueryParams struct {
	ReportHash string `queryParam:"style=form,explode=true,name=report_hash"`
}

type GetReportsStatusRequest struct {
	QueryParams GetReportsStatusQueryParams
}

type GetReportsStatusResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	ReportStatus             *interface{}
	StatusCode               int64
}
