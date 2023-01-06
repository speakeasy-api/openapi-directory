package operations

type GetReportsCustomInsertQueryParams struct {
	Ids        []interface{} `queryParam:"style=form,explode=false,name=ids"`
	UploadHash string        `queryParam:"style=form,explode=true,name=upload_hash"`
}

type GetReportsCustomInsertRequest struct {
	QueryParams GetReportsCustomInsertQueryParams
}

type GetReportsCustomInsertResponse struct {
	FourHundredError         *interface{}
	FourHundredAndOneError   *interface{}
	FourHundredAndThreeError *interface{}
	FourHundredAndFourError  *interface{}
	FiveHundredError         *interface{}
	ContentType              string
	CustomInsert             *interface{}
	StatusCode               int64
}
