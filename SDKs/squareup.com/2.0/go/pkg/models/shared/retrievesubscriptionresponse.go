package shared

// RetrieveSubscriptionResponse
// Defines the fields that are included in the response from the
// [RetrieveSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/retrieve-subscription) endpoint.
type RetrieveSubscriptionResponse struct {
	Errors       []Error       `json:"errors,omitempty"`
	Subscription *Subscription `json:"subscription,omitempty"`
}
