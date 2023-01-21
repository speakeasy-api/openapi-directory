package shared

// GoogleCloudContentwarehouseV1SetACLRequest
// Request message for DocumentService.SetAcl.
type GoogleCloudContentwarehouseV1SetACLRequest struct {
	Policy          *GoogleIamV1Policy                            `json:"policy,omitempty"`
	ProjectOwner    *bool                                         `json:"projectOwner,omitempty"`
	RequestMetadata *GoogleCloudContentwarehouseV1RequestMetadata `json:"requestMetadata,omitempty"`
}
