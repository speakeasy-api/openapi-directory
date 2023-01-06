package shared

type ClientStringStats struct {
	LanguageCounts           []LanguageStringStat `json:"language_counts,omitempty"`
	TotalProjectStringsCount *int64               `json:"total_project_strings_count,omitempty"`
	TotalTmStringsCount      *int64               `json:"total_tm_strings_count,omitempty"`
}
