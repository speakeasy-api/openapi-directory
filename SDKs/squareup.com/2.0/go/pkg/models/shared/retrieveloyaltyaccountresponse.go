package shared

// RetrieveLoyaltyAccountResponse
// A response that includes the loyalty account.
type RetrieveLoyaltyAccountResponse struct {
	Errors         []Error         `json:"errors,omitempty"`
	LoyaltyAccount *LoyaltyAccount `json:"loyalty_account,omitempty"`
}
