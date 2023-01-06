package operations

type RetrieveAccountTransactionsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveAccountTransactionsRequest struct {
	PathParams RetrieveAccountTransactionsPathParams
}

type RetrieveAccountTransactionsResponse struct {
	ContentType string
	StatusCode  int64
}
