package shared

type LanguageStringStat struct {
	ProjectStringCount *int64  `json:"project_string_count,omitempty"`
	SourceLanguage     *string `json:"source_language,omitempty"`
	TmStringCount      *int64  `json:"tm_string_count,omitempty"`
}
