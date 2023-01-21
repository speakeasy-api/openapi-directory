package shared

// CustomerPreferences
// Represents communication preferences for the customer profile.
type CustomerPreferences struct {
	EmailUnsubscribed *bool `json:"email_unsubscribed,omitempty"`
}
