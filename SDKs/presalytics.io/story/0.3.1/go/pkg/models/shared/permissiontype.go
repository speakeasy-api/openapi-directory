package shared

// PermissionType
// Base model for all types
type PermissionType struct {
	CanAddCollaborators *bool   `json:"can_add_collaborators,omitempty"`
	CanDelete           *bool   `json:"can_delete,omitempty"`
	CanEdit             *bool   `json:"can_edit,omitempty"`
	CanView             *bool   `json:"can_view,omitempty"`
	Name                *string `json:"name,omitempty"`
}
