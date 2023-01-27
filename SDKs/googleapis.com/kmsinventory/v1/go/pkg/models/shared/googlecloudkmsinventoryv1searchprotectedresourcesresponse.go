package shared

// GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse
// Response message for KeyTrackingService.SearchProtectedResources.
type GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse struct {
	NextPageToken      *string                                      `json:"nextPageToken,omitempty"`
	ProtectedResources []GoogleCloudKmsInventoryV1ProtectedResource `json:"protectedResources,omitempty"`
}
