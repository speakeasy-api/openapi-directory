package shared

// CancelSubscriptionResponse
// Defines fields that are included in a
// [CancelSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/cancel-subscription) response.
type CancelSubscriptionResponse struct {
	Errors       []Error       `json:"errors,omitempty"`
	Subscription *Subscription `json:"subscription,omitempty"`
}
