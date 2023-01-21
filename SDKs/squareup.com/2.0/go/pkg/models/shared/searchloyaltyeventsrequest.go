package shared

// SearchLoyaltyEventsRequest
// A request to search for loyalty events.
type SearchLoyaltyEventsRequest struct {
	Cursor *string            `json:"cursor,omitempty"`
	Limit  *int64             `json:"limit,omitempty"`
	Query  *LoyaltyEventQuery `json:"query,omitempty"`
}
