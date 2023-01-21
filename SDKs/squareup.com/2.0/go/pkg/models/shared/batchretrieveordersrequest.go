package shared

// BatchRetrieveOrdersRequest
// Defines the fields that are included in requests to the
// `BatchRetrieveOrders` endpoint.
type BatchRetrieveOrdersRequest struct {
	LocationID *string  `json:"location_id,omitempty"`
	OrderIds   []string `json:"order_ids"`
}
