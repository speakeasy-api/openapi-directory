package shared

// SearchSubscriptionsRequest
// Defines parameters in a
// [SearchSubscriptions](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/search-subscriptions) endpoint
// request.
type SearchSubscriptionsRequest struct {
	Cursor *string                   `json:"cursor,omitempty"`
	Limit  *int64                    `json:"limit,omitempty"`
	Query  *SearchSubscriptionsQuery `json:"query,omitempty"`
}
