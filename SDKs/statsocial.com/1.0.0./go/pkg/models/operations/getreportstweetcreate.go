package operations

type GetReportsTweetCreateQueryParams struct {
	EndDate    int64   `queryParam:"style=form,explode=true,name=end_date"`
	Filter     *string `queryParam:"style=form,explode=true,name=filter"`
	ReportName string  `queryParam:"style=form,explode=true,name=report_name"`
	StartDate  int64   `queryParam:"style=form,explode=true,name=start_date"`
	Terms      string  `queryParam:"style=form,explode=true,name=terms"`
}

type GetReportsTweetCreateRequest struct {
	QueryParams GetReportsTweetCreateQueryParams
}

type GetReportsTweetCreateResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	CreateTweet              *interface{}
	StatusCode               int64
}
