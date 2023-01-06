package operations

type RetrieveAccountDetailsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveAccountDetailsRequest struct {
	PathParams RetrieveAccountDetailsPathParams
}

type RetrieveAccountDetailsResponse struct {
	ContentType string
	StatusCode  int64
}
