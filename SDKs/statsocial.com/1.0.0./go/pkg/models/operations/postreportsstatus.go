package operations

type PostReportsStatusQueryParams struct {
	ReportHash string `queryParam:"style=form,explode=true,name=report_hash"`
}

type PostReportsStatusRequest struct {
	QueryParams PostReportsStatusQueryParams
}

type PostReportsStatusResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	ReportStatus             *interface{}
	StatusCode               int64
}
