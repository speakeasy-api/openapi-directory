package shared

// PrivateClusterConfig
// Configuration options for private clusters.
type PrivateClusterConfig struct {
	ClusterHostname       *string `json:"clusterHostname,omitempty"`
	EnablePrivateEndpoint *bool   `json:"enablePrivateEndpoint,omitempty"`
	ServiceAttachmentURI  *string `json:"serviceAttachmentUri,omitempty"`
}

// PrivateClusterConfigInput
// Configuration options for private clusters.
type PrivateClusterConfigInput struct {
	EnablePrivateEndpoint *bool `json:"enablePrivateEndpoint,omitempty"`
}
