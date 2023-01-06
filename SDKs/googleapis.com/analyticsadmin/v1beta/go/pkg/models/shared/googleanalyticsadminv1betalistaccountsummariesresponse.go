package shared

// GoogleAnalyticsAdminV1betaListAccountSummariesResponse
// Response message for ListAccountSummaries RPC.
type GoogleAnalyticsAdminV1betaListAccountSummariesResponse struct {
	AccountSummaries []GoogleAnalyticsAdminV1betaAccountSummary `json:"accountSummaries,omitempty"`
	NextPageToken    *string                                    `json:"nextPageToken,omitempty"`
}
