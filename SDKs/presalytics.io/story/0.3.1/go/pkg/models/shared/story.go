package shared

// Story
// Base model for all types
type Story struct {
	Collaborators  []StoryCollaborator   `json:"collaborators,omitempty"`
	IsPublic       *bool                 `json:"is_public,omitempty"`
	OoxmlDocuments []OoxmlDocument       `json:"ooxml_documents,omitempty"`
	Outline        *string               `json:"outline,omitempty"`
	OutlineHistory []StoryOutlineHistory `json:"outline_history,omitempty"`
	Revision       *int64                `json:"revision,omitempty"`
	Title          *string               `json:"title,omitempty"`
}
