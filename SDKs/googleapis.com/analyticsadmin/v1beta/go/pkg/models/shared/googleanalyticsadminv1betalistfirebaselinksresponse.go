package shared

// GoogleAnalyticsAdminV1betaListFirebaseLinksResponse
// Response message for ListFirebaseLinks RPC
type GoogleAnalyticsAdminV1betaListFirebaseLinksResponse struct {
	FirebaseLinks []GoogleAnalyticsAdminV1betaFirebaseLink `json:"firebaseLinks,omitempty"`
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
}
