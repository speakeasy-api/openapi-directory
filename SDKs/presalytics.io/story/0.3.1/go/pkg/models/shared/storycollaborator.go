package shared

// StoryCollaborator
// Base model for all types
type StoryCollaborator struct {
	Active           *bool           `json:"active,omitempty"`
	Email            *string         `json:"email,omitempty"`
	LeadID           *int32          `json:"lead_id,omitempty"`
	Name             *string         `json:"name,omitempty"`
	PermissionType   *PermissionType `json:"permission_type,omitempty"`
	PermissionTypeID *string         `json:"permission_type_id,omitempty"`
	StoryID          *string         `json:"story_id,omitempty"`
	UserID           *string         `json:"user_id,omitempty"`
}
