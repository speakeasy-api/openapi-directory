package shared

// GoogleCloudKmsInventoryV1ListCryptoKeysResponse
// Response message for KeyDashboardService.ListCryptoKeys.
type GoogleCloudKmsInventoryV1ListCryptoKeysResponse struct {
	CryptoKeys    []GoogleCloudKmsV1CryptoKey `json:"cryptoKeys,omitempty"`
	NextPageToken *string                     `json:"nextPageToken,omitempty"`
}
