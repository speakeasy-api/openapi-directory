package shared

// GoogleAnalyticsAdminV1betaListPropertiesResponse
// Response message for ListProperties RPC.
type GoogleAnalyticsAdminV1betaListPropertiesResponse struct {
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
	Properties    []GoogleAnalyticsAdminV1betaProperty `json:"properties,omitempty"`
}
