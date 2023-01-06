package shared

type TranslationMemoryUnit struct {
	SourceLanguage *string `json:"sourceLanguage,omitempty"`
	SourceText     *string `json:"sourceText,omitempty"`
	TargetLanguage *string `json:"targetLanguage,omitempty"`
	TargetText     *string `json:"targetText,omitempty"`
}
