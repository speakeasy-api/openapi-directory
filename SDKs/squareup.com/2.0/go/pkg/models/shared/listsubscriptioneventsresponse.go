package shared

// ListSubscriptionEventsResponse
// Defines the fields that are included in the response from the
// [ListSubscriptionEvents](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/list-subscription-events)
// endpoint.
type ListSubscriptionEventsResponse struct {
	Cursor             *string             `json:"cursor,omitempty"`
	Errors             []Error             `json:"errors,omitempty"`
	SubscriptionEvents []SubscriptionEvent `json:"subscription_events,omitempty"`
}
