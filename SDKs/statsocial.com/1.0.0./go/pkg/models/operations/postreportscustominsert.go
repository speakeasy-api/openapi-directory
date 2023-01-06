package operations

type PostReportsCustomInsertQueryParams struct {
	Ids        []interface{} `queryParam:"style=form,explode=false,name=ids"`
	UploadHash string        `queryParam:"style=form,explode=true,name=upload_hash"`
}

type PostReportsCustomInsertRequest struct {
	QueryParams PostReportsCustomInsertQueryParams
}

type PostReportsCustomInsertResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FourHundredAndFourError  *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	CustomInsert             *interface{}
	StatusCode               int64
}
