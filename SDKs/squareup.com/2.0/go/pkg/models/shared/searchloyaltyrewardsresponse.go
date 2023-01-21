package shared

// SearchLoyaltyRewardsResponse
// A response that includes the loyalty rewards satisfying the search criteria.
type SearchLoyaltyRewardsResponse struct {
	Cursor  *string         `json:"cursor,omitempty"`
	Errors  []Error         `json:"errors,omitempty"`
	Rewards []LoyaltyReward `json:"rewards,omitempty"`
}
