package shared

// CreateLoyaltyAccountResponse
// A response that includes loyalty account created.
type CreateLoyaltyAccountResponse struct {
	Errors         []Error         `json:"errors,omitempty"`
	LoyaltyAccount *LoyaltyAccount `json:"loyalty_account,omitempty"`
}
