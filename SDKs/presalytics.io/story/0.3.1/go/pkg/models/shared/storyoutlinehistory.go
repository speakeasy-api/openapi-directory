package shared

// StoryOutlineHistory
// Base model for all types
type StoryOutlineHistory struct {
	CollaboratorUserID *string `json:"collaborator_user_id,omitempty"`
	Outline            *string `json:"outline,omitempty"`
	RevisionNumber     *int64  `json:"revision_number,omitempty"`
	StoryID            *string `json:"story_id,omitempty"`
}
