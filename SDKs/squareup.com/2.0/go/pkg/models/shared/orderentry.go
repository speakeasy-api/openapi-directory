package shared

// OrderEntry
// A lightweight description of an [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) that is returned when
// `returned_entries` is `true` on a [SearchOrdersRequest](https://developer.squareup.com/reference/square_2021-08-18/orders-api/search-orders).
type OrderEntry struct {
	LocationID *string `json:"location_id,omitempty"`
	OrderID    *string `json:"order_id,omitempty"`
	Version    *int64  `json:"version,omitempty"`
}
