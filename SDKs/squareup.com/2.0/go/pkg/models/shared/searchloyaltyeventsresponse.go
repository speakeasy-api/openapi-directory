package shared

// SearchLoyaltyEventsResponse
// A response that contains loyalty events that satisfy the search
// criteria, in order by the `created_at` date.
type SearchLoyaltyEventsResponse struct {
	Cursor *string        `json:"cursor,omitempty"`
	Errors []Error        `json:"errors,omitempty"`
	Events []LoyaltyEvent `json:"events,omitempty"`
}
