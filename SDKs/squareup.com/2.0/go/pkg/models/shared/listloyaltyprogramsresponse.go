package shared

// ListLoyaltyProgramsResponse
// A response that contains all loyalty programs.
type ListLoyaltyProgramsResponse struct {
	Errors   []Error          `json:"errors,omitempty"`
	Programs []LoyaltyProgram `json:"programs,omitempty"`
}
