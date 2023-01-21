package shared

// UpdateSubscriptionRequest
// Defines parameters in a
// [UpdateSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/update-subscription) endpoint
// request.
type UpdateSubscriptionRequest struct {
	Subscription *Subscription `json:"subscription,omitempty"`
}
