// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleAnalyticsAdminV1betaListFirebaseLinksResponse - Response message for ListFirebaseLinks RPC
type GoogleAnalyticsAdminV1betaListFirebaseLinksResponse struct {
	// List of FirebaseLinks. This will have at most one value.
	FirebaseLinks []GoogleAnalyticsAdminV1betaFirebaseLink `json:"firebaseLinks,omitempty"`
	// A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated.
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
