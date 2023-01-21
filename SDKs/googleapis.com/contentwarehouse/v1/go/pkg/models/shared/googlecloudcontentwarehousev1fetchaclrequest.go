package shared

// GoogleCloudContentwarehouseV1FetchACLRequest
// Request message for DocumentService.FetchAcl
type GoogleCloudContentwarehouseV1FetchACLRequest struct {
	ProjectOwner    *bool                                         `json:"projectOwner,omitempty"`
	RequestMetadata *GoogleCloudContentwarehouseV1RequestMetadata `json:"requestMetadata,omitempty"`
}
