package shared

// UpdateSubscriptionResponse
// Defines the fields that are included in the response from the
// [UpdateSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/update-subscription) endpoint.
type UpdateSubscriptionResponse struct {
	Errors       []Error       `json:"errors,omitempty"`
	Subscription *Subscription `json:"subscription,omitempty"`
}
