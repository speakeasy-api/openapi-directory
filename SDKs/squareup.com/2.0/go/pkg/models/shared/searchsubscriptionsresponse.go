package shared

// SearchSubscriptionsResponse
// Defines the fields that are included in the response from the
// [SearchSubscriptions](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/search-subscriptions) endpoint.
type SearchSubscriptionsResponse struct {
	Cursor        *string        `json:"cursor,omitempty"`
	Errors        []Error        `json:"errors,omitempty"`
	Subscriptions []Subscription `json:"subscriptions,omitempty"`
}
