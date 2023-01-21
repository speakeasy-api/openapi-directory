package shared

// SearchLoyaltyAccountsRequest
// A request to search for loyalty accounts.
type SearchLoyaltyAccountsRequest struct {
	Cursor *string                                          `json:"cursor,omitempty"`
	Limit  *int64                                           `json:"limit,omitempty"`
	Query  *SearchLoyaltyAccountsRequestLoyaltyAccountQuery `json:"query,omitempty"`
}
