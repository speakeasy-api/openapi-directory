package shared

// RetrieveMerchantResponse
// The response object returned by the [RetrieveMerchant](https://developer.squareup.com/reference/square_2021-08-18/merchants-api/retrieve-merchant) endpoint.
type RetrieveMerchantResponse struct {
	Errors   []Error   `json:"errors,omitempty"`
	Merchant *Merchant `json:"merchant,omitempty"`
}
