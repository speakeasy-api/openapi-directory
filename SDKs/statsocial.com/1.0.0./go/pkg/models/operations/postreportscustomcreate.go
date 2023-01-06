package operations

type PostReportsCustomCreateQueryParams struct {
	Filter     *string `queryParam:"style=form,explode=true,name=filter"`
	UploadHash string  `queryParam:"style=form,explode=true,name=upload_hash"`
}

type PostReportsCustomCreateRequest struct {
	QueryParams PostReportsCustomCreateQueryParams
}

type PostReportsCustomCreateResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FourHundredAndFourError  *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	CustomCreate             *interface{}
	StatusCode               int64
}
