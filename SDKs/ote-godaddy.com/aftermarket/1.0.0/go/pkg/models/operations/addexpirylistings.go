package operations

type AddExpiryListingsRequests struct {
	AftermarketListingExpiryCreates []interface{} `request:"mediaType=application/json"`
	ApplicationXML                  []byte        `request:"mediaType=application/xml"`
	TextXML                         []byte        `request:"mediaType=text/xml"`
}

type AddExpiryListingsRequest struct {
	Request AddExpiryListingsRequests
}

type AddExpiryListingsResponse struct {
	AftermarketListingAction *interface{}
	Body                     []byte
	ContentType              string
	Error                    *interface{}
	ErrorLimit               *interface{}
	StatusCode               int64
}
