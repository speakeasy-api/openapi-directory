package shared

// GoogleAnalyticsAdminV1betaListDataStreamsResponse
// Response message for ListDataStreams RPC.
type GoogleAnalyticsAdminV1betaListDataStreamsResponse struct {
	DataStreams   []GoogleAnalyticsAdminV1betaDataStream `json:"dataStreams,omitempty"`
	NextPageToken *string                                `json:"nextPageToken,omitempty"`
}
