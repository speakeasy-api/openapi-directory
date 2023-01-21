package shared

// GoogleCloudContentwarehouseV1FetchACLResponse
// Response message for DocumentService.FetchAcl.
type GoogleCloudContentwarehouseV1FetchACLResponse struct {
	Metadata *GoogleCloudContentwarehouseV1ResponseMetadata `json:"metadata,omitempty"`
	Policy   *GoogleIamV1Policy                             `json:"policy,omitempty"`
}
