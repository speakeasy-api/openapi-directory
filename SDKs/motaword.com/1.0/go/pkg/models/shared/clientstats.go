package shared

type ClientStats struct {
	DocumentCount       *int64    `json:"document_count,omitempty"`
	Nps                 *float32  `json:"nps,omitempty"`
	StartedProjectCount *int64    `json:"started_project_count,omitempty"`
	TotalDiscounted     *Monetary `json:"total_discounted,omitempty"`
	TotalProjectCount   *int64    `json:"total_project_count,omitempty"`
	TotalSpending       *float32  `json:"total_spending,omitempty"`
	TranslatorCount     *int64    `json:"translator_count,omitempty"`
}
