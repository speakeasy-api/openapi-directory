package operations

type PostReportsTwitterCreateQueryParams struct {
	Filter        *string `queryParam:"style=form,explode=true,name=filter"`
	TwitterHandle *string `queryParam:"style=form,explode=true,name=twitter_handle"`
	TwitterID     *int64  `queryParam:"style=form,explode=true,name=twitter_id"`
}

type PostReportsTwitterCreateRequest struct {
	QueryParams PostReportsTwitterCreateQueryParams
}

type PostReportsTwitterCreateResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	CreateTwitter            *interface{}
	StatusCode               int64
}
