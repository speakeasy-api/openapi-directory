package shared

// ResumeSubscriptionResponse
// Defines parameters in a
// [ResumeSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/resume-subscription) endpoint
// response.
type ResumeSubscriptionResponse struct {
	Errors       []Error       `json:"errors,omitempty"`
	Subscription *Subscription `json:"subscription,omitempty"`
}
