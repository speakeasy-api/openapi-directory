package shared

// LoyaltyEventQuery
// Represents a query used to search for loyalty events.
type LoyaltyEventQuery struct {
	Filter *LoyaltyEventFilter `json:"filter,omitempty"`
}
