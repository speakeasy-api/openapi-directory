package shared

// BatchRetrieveOrdersResponse
// Defines the fields that are included in the response body of
// a request to the `BatchRetrieveOrders` endpoint.
type BatchRetrieveOrdersResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Orders []Order `json:"orders,omitempty"`
}
