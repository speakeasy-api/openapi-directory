package shared

// ListMerchantsResponse
// The response object returned by the [ListMerchant](https://developer.squareup.com/reference/square_2021-08-18/merchants-api/list-merchants) endpoint.
type ListMerchantsResponse struct {
	Cursor   *int64     `json:"cursor,omitempty"`
	Errors   []Error    `json:"errors,omitempty"`
	Merchant []Merchant `json:"merchant,omitempty"`
}
