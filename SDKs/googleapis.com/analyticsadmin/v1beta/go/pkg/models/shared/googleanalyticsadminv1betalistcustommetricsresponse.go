package shared

// GoogleAnalyticsAdminV1betaListCustomMetricsResponse
// Response message for ListCustomMetrics RPC.
type GoogleAnalyticsAdminV1betaListCustomMetricsResponse struct {
	CustomMetrics []GoogleAnalyticsAdminV1betaCustomMetric `json:"customMetrics,omitempty"`
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
}
