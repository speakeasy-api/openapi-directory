package shared

type StringWithTranslations struct {
	Translations map[string]StringTranslation `json:"translations,omitempty"`
}
