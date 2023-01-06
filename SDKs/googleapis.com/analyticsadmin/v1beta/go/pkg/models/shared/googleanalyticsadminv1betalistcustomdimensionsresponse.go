package shared

// GoogleAnalyticsAdminV1betaListCustomDimensionsResponse
// Response message for ListCustomDimensions RPC.
type GoogleAnalyticsAdminV1betaListCustomDimensionsResponse struct {
	CustomDimensions []GoogleAnalyticsAdminV1betaCustomDimension `json:"customDimensions,omitempty"`
	NextPageToken    *string                                     `json:"nextPageToken,omitempty"`
}
