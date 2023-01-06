package shared

type VendorProjectPair struct {
	Currency         *string  `json:"currency,omitempty"`
	IsProofreader    *bool    `json:"is_proofreader,omitempty"`
	Proofreader      *User    `json:"proofreader,omitempty"`
	ProofreadingRate *float32 `json:"proofreading_rate,omitempty"`
	SourceLanguage   *string  `json:"source_language,omitempty"`
	TargetLanguage   *string  `json:"target_language,omitempty"`
	TranslationRate  *float32 `json:"translation_rate,omitempty"`
}
