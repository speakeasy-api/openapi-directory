package shared

type Glossary struct {
	ID         *int64         `json:"id,omitempty"`
	Links      *DocumentLinks `json:"links,omitempty"`
	Name       *string        `json:"name,omitempty"`
	UploadedAt *int64         `json:"uploaded_at,omitempty"`
}
