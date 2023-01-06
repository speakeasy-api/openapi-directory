package shared

// GoogleAnalyticsAdminV1betaListAccountsResponse
// Request message for ListAccounts RPC.
type GoogleAnalyticsAdminV1betaListAccountsResponse struct {
	Accounts      []GoogleAnalyticsAdminV1betaAccount `json:"accounts,omitempty"`
	NextPageToken *string                             `json:"nextPageToken,omitempty"`
}
