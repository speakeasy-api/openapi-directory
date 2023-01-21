package shared

// SearchOrdersResponse
// Either the `order_entries` or `orders` field is set, depending on whether
// `return_entries` is set on the [SearchOrdersRequest](https://developer.squareup.com/reference/square_2021-08-18/orders-api/search-orders).
type SearchOrdersResponse struct {
	Cursor       *string      `json:"cursor,omitempty"`
	Errors       []Error      `json:"errors,omitempty"`
	OrderEntries []OrderEntry `json:"order_entries,omitempty"`
	Orders       []Order      `json:"orders,omitempty"`
}
