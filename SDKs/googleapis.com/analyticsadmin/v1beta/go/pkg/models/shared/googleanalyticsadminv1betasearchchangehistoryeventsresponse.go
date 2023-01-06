package shared

// GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse
// Response message for SearchAccounts RPC.
type GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse struct {
	ChangeHistoryEvents []GoogleAnalyticsAdminV1betaChangeHistoryEvent `json:"changeHistoryEvents,omitempty"`
	NextPageToken       *string                                        `json:"nextPageToken,omitempty"`
}
