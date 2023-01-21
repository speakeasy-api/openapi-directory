package shared

// GoogleCloudContentwarehouseV1SetACLResponse
// Response message for DocumentService.SetAcl.
type GoogleCloudContentwarehouseV1SetACLResponse struct {
	Metadata *GoogleCloudContentwarehouseV1ResponseMetadata `json:"metadata,omitempty"`
	Policy   *GoogleIamV1Policy                             `json:"policy,omitempty"`
}
