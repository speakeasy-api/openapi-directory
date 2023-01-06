package shared

// GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse
// Response message for ListGoogleAdsLinks RPC.
type GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse struct {
	GoogleAdsLinks []GoogleAnalyticsAdminV1betaGoogleAdsLink `json:"googleAdsLinks,omitempty"`
	NextPageToken  *string                                   `json:"nextPageToken,omitempty"`
}
