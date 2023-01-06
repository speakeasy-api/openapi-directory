package shared

type LanguagePairsReportReportLanguagePair struct {
	SourceLanguage *string `json:"source_language,omitempty"`
	TargetLanguage *string `json:"target_language,omitempty"`
}

type LanguagePairsReportReport struct {
	LanguagePair *LanguagePairsReportReportLanguagePair `json:"language_pair,omitempty"`
	Spending     *float32                               `json:"spending,omitempty"`
	WordCount    *int64                                 `json:"word_count,omitempty"`
}

type LanguagePairsReport struct {
	Meta   *PagingMeta                 `json:"meta,omitempty"`
	Report []LanguagePairsReportReport `json:"report,omitempty"`
}
