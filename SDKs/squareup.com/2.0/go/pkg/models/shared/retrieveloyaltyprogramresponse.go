package shared

// RetrieveLoyaltyProgramResponse
// A response that contains the loyalty program.
type RetrieveLoyaltyProgramResponse struct {
	Errors  []Error         `json:"errors,omitempty"`
	Program *LoyaltyProgram `json:"program,omitempty"`
}
