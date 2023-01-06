package shared

// Session
// Base model for all types
type Session struct {
	Collaborator    *StoryCollaborator `json:"collaborator,omitempty"`
	CollaboratorID  *string            `json:"collaborator_id,omitempty"`
	Host            *string            `json:"host,omitempty"`
	OutlineRevision *int64             `json:"outline_revision,omitempty"`
	Views           []View             `json:"views,omitempty"`
}
