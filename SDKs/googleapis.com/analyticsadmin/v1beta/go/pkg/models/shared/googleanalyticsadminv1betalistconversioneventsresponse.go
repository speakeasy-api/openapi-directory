package shared

// GoogleAnalyticsAdminV1betaListConversionEventsResponse
// Response message for ListConversionEvents RPC.
type GoogleAnalyticsAdminV1betaListConversionEventsResponse struct {
	ConversionEvents []GoogleAnalyticsAdminV1betaConversionEvent `json:"conversionEvents,omitempty"`
	NextPageToken    *string                                     `json:"nextPageToken,omitempty"`
}
