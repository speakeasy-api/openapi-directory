package shared

type StringWithTranslations struct {
	Content      *string                      `json:"content,omitempty"`
	FileID       *int64                       `json:"file_id,omitempty"`
	ID           *string                      `json:"id,omitempty"`
	Translations map[string]StringTranslation `json:"translations,omitempty"`
}
