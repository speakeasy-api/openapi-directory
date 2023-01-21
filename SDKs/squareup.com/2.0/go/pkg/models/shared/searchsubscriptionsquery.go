package shared

// SearchSubscriptionsQuery
// Represents a query (including filtering criteria) used to search for subscriptions.
type SearchSubscriptionsQuery struct {
	Filter *SearchSubscriptionsFilter `json:"filter,omitempty"`
}
