package shared

// Story1
// Base model for all types
type Story1 struct {
	Collaborators  []StoryCollaborator1  `json:"collaborators,omitempty"`
	IsPublic       *bool                 `json:"is_public,omitempty"`
	OoxmlDocuments []OoxmlDocument       `json:"ooxml_documents,omitempty"`
	Outline        *string               `json:"outline,omitempty"`
	OutlineHistory []StoryOutlineHistory `json:"outline_history,omitempty"`
	Revision       *int64                `json:"revision,omitempty"`
	Title          *string               `json:"title,omitempty"`
}
