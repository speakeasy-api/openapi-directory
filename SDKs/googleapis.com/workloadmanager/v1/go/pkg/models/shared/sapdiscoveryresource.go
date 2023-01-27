package shared

type SapDiscoveryResourceResourceTypeEnum string

const (
	SapDiscoveryResourceResourceTypeEnumResourceTypeUnspecified SapDiscoveryResourceResourceTypeEnum = "RESOURCE_TYPE_UNSPECIFIED"
	SapDiscoveryResourceResourceTypeEnumCompute                 SapDiscoveryResourceResourceTypeEnum = "COMPUTE"
	SapDiscoveryResourceResourceTypeEnumStorage                 SapDiscoveryResourceResourceTypeEnum = "STORAGE"
	SapDiscoveryResourceResourceTypeEnumNetwork                 SapDiscoveryResourceResourceTypeEnum = "NETWORK"
)

// SapDiscoveryResource
// Message describing a resource.
type SapDiscoveryResource struct {
	RelatedResources []string                              `json:"relatedResources,omitempty"`
	ResourceKind     *string                               `json:"resourceKind,omitempty"`
	ResourceType     *SapDiscoveryResourceResourceTypeEnum `json:"resourceType,omitempty"`
	ResourceURI      *string                               `json:"resourceUri,omitempty"`
	UpdateTime       *string                               `json:"updateTime,omitempty"`
}
