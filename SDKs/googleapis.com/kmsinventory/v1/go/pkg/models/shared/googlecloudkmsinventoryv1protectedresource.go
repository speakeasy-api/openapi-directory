package shared

// GoogleCloudKmsInventoryV1ProtectedResource
// Metadata about a resource protected by a Cloud KMS key.
type GoogleCloudKmsInventoryV1ProtectedResource struct {
	CloudProduct     *string           `json:"cloudProduct,omitempty"`
	CreateTime       *string           `json:"createTime,omitempty"`
	CryptoKeyVersion *string           `json:"cryptoKeyVersion,omitempty"`
	Labels           map[string]string `json:"labels,omitempty"`
	Location         *string           `json:"location,omitempty"`
	Name             *string           `json:"name,omitempty"`
	Project          *string           `json:"project,omitempty"`
	ProjectID        *string           `json:"projectId,omitempty"`
	ResourceType     *string           `json:"resourceType,omitempty"`
}
