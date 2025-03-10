// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// SubscriptionDataList - List of subscriptions
type SubscriptionDataList struct {
	// Subscriptions retrieved from this user
	Data []Subscription `json:"data,omitempty"`
	// Error list; appears only if there was an error
	Errors []Error `json:"errors,omitempty"`
	// Optional error message
	Message *string `json:"message,omitempty"`
	// Current page that is being queried
	Page *int64 `json:"page,omitempty"`
	// Amount of subscriptions to show per page
	PerPage *int64 `json:"per_page,omitempty"`
	// Total number of subscriptions for this user
	TotalCount *int64 `json:"total_count,omitempty"`
}
