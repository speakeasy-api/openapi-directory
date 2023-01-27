package shared

// GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse
// Response for ListIntegrationVersions.
type GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse struct {
	IntegrationVersions []GoogleCloudIntegrationsV1alphaIntegrationVersion `json:"integrationVersions,omitempty"`
	NextPageToken       *string                                            `json:"nextPageToken,omitempty"`
	NoPermission        *bool                                              `json:"noPermission,omitempty"`
}
