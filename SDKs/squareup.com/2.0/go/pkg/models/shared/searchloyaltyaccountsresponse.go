package shared

// SearchLoyaltyAccountsResponse
// A response that includes loyalty accounts that satisfy the search criteria.
type SearchLoyaltyAccountsResponse struct {
	Cursor          *string          `json:"cursor,omitempty"`
	Errors          []Error          `json:"errors,omitempty"`
	LoyaltyAccounts []LoyaltyAccount `json:"loyalty_accounts,omitempty"`
}
