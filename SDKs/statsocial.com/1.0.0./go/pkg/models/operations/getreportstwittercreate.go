package operations

type GetReportsTwitterCreateQueryParams struct {
	Filter        *string `queryParam:"style=form,explode=true,name=filter"`
	TwitterHandle *string `queryParam:"style=form,explode=true,name=twitter_handle"`
	TwitterID     *int64  `queryParam:"style=form,explode=true,name=twitter_id"`
}

type GetReportsTwitterCreateRequest struct {
	QueryParams GetReportsTwitterCreateQueryParams
}

type GetReportsTwitterCreateResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	CreateTwitter            *interface{}
	StatusCode               int64
}
