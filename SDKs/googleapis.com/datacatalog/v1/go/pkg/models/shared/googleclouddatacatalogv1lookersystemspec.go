package shared

// GoogleCloudDatacatalogV1LookerSystemSpec
// Specification that applies to entries that are part `LOOKER` system (user_specified_type)
type GoogleCloudDatacatalogV1LookerSystemSpec struct {
	ParentInstanceDisplayName *string `json:"parentInstanceDisplayName,omitempty"`
	ParentInstanceID          *string `json:"parentInstanceId,omitempty"`
	ParentModelDisplayName    *string `json:"parentModelDisplayName,omitempty"`
	ParentModelID             *string `json:"parentModelId,omitempty"`
	ParentViewDisplayName     *string `json:"parentViewDisplayName,omitempty"`
	ParentViewID              *string `json:"parentViewId,omitempty"`
}
