package shared

// SearchSubscriptionsFilter
// Represents a set of SearchSubscriptionsQuery filters used to limit the set of Subscriptions returned by SearchSubscriptions.
type SearchSubscriptionsFilter struct {
	CustomerIds []string `json:"customer_ids,omitempty"`
	LocationIds []string `json:"location_ids,omitempty"`
}
