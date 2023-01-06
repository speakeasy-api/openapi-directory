package operations

import (
	"openapi/pkg/models/shared"
)

type PostReportsQueryParams struct {
	Baseline   *int64 `queryParam:"style=form,explode=true,name=baseline"`
	ReportDate *int64 `queryParam:"style=form,explode=true,name=report_date"`
	ReportHash string `queryParam:"style=form,explode=true,name=report_hash"`
	Sample     int64  `queryParam:"style=form,explode=true,name=sample"`
}

type PostReportsRequest struct {
	QueryParams PostReportsQueryParams
}

type PostReportsResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FourHundredAndFourError  *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	ReportSuccess            *shared.ReportSuccess
	StatusCode               int64
}
