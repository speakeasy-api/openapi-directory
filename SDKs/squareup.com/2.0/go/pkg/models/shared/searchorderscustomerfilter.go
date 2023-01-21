package shared

// SearchOrdersCustomerFilter
// A filter based on the order `customer_id` and any tender `customer_id`
// associated with the order. It does not filter based on the
// [FulfillmentRecipient](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderFulfillmentRecipient) `customer_id`.
type SearchOrdersCustomerFilter struct {
	CustomerIds []string `json:"customer_ids,omitempty"`
}
