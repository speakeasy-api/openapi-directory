package operations

type GetApplicationsStatusQueryParams struct {
	Key string `queryParam:"style=form,explode=true,name=key"`
}

type GetApplicationsStatusRequest struct {
	QueryParams GetApplicationsStatusQueryParams
}

type GetApplicationsStatusResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FiveHundredError         *interface{}
	ApplicationStatus        *interface{}
	ContentType              string
	StatusCode               int64
}
