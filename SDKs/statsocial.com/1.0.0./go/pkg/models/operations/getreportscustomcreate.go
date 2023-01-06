package operations

type GetReportsCustomCreateQueryParams struct {
	Filter     *string `queryParam:"style=form,explode=true,name=filter"`
	UploadHash string  `queryParam:"style=form,explode=true,name=upload_hash"`
}

type GetReportsCustomCreateRequest struct {
	QueryParams GetReportsCustomCreateQueryParams
}

type GetReportsCustomCreateResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FourHundredAndFourError  *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	CustomCreate             *interface{}
	StatusCode               int64
}
