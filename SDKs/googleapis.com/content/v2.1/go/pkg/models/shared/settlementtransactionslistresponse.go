// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// SettlementtransactionsListResponse - Successful response
type SettlementtransactionsListResponse struct {
	// Identifies what kind of resource this is. Value: the fixed string "`content#settlementtransactionsListResponse`".
	Kind *string `json:"kind,omitempty"`
	// The token for the retrieval of the next page of returns.
	NextPageToken *string                 `json:"nextPageToken,omitempty"`
	Resources     []SettlementTransaction `json:"resources,omitempty"`
}
