package shared

// CreateSubscriptionResponse
// Defines the fields that are included in the response from the
// [CreateSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/create-subscription) endpoint.
type CreateSubscriptionResponse struct {
	Errors       []Error       `json:"errors,omitempty"`
	Subscription *Subscription `json:"subscription,omitempty"`
}
