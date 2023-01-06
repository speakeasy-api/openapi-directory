package shared

type LanguagePair struct {
	SourceLanguage *string `json:"source_language,omitempty"`
	TargetLanguage *string `json:"target_language,omitempty"`
}
