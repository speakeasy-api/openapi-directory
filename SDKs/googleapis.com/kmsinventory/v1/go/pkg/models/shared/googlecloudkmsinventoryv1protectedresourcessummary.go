package shared

// GoogleCloudKmsInventoryV1ProtectedResourcesSummary
// Aggregate information about the resources protected by a Cloud KMS key in the same Cloud organization as the key.
type GoogleCloudKmsInventoryV1ProtectedResourcesSummary struct {
	CloudProducts map[string]string `json:"cloudProducts,omitempty"`
	Locations     map[string]string `json:"locations,omitempty"`
	Name          *string           `json:"name,omitempty"`
	ProjectCount  *int32            `json:"projectCount,omitempty"`
	ResourceCount *string           `json:"resourceCount,omitempty"`
	ResourceTypes map[string]string `json:"resourceTypes,omitempty"`
}
