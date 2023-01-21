package shared

// GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse
// Response message for ListBigQueryLinks RPC
type GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse struct {
	BigqueryLinks []GoogleAnalyticsAdminV1alphaBigQueryLink `json:"bigqueryLinks,omitempty"`
	NextPageToken *string                                   `json:"nextPageToken,omitempty"`
}
