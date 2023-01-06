package operations

type RetrieveAccountBalancesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveAccountBalancesRequest struct {
	PathParams RetrieveAccountBalancesPathParams
}

type RetrieveAccountBalancesResponse struct {
	ContentType string
	StatusCode  int64
}
