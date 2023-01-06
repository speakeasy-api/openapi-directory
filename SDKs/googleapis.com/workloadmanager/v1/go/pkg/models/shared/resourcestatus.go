package shared

type ResourceStatusStateEnum string

const (
	ResourceStatusStateEnumStateUnspecified ResourceStatusStateEnum = "STATE_UNSPECIFIED"
	ResourceStatusStateEnumCreating         ResourceStatusStateEnum = "CREATING"
	ResourceStatusStateEnumActive           ResourceStatusStateEnum = "ACTIVE"
	ResourceStatusStateEnumDeleting         ResourceStatusStateEnum = "DELETING"
)

// ResourceStatus
// Message describing resource status
type ResourceStatus struct {
	RulesNewerVersions []string                 `json:"rulesNewerVersions,omitempty"`
	State              *ResourceStatusStateEnum `json:"state,omitempty"`
}
