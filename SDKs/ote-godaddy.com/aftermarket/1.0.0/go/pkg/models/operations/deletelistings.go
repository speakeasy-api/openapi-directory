package operations

type DeleteListingsQueryParams struct {
	Domains []string `queryParam:"style=form,explode=false,name=domains"`
}

type DeleteListingsRequest struct {
	QueryParams DeleteListingsQueryParams
}

type DeleteListingsResponse struct {
	AftermarketListingAction *interface{}
	Body                     []byte
	ContentType              string
	Error                    *interface{}
	ErrorLimit               *interface{}
	StatusCode               int64
}
