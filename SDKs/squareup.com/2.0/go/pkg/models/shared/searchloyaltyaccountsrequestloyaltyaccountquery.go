package shared

// SearchLoyaltyAccountsRequestLoyaltyAccountQuery
// The search criteria for the loyalty accounts.
type SearchLoyaltyAccountsRequestLoyaltyAccountQuery struct {
	CustomerIds []string                `json:"customer_ids,omitempty"`
	Mappings    []LoyaltyAccountMapping `json:"mappings,omitempty"`
}
