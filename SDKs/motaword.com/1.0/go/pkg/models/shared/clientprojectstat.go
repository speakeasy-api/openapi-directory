package shared

type ClientProjectStat struct {
	Languages        []string `json:"languages,omitempty"`
	Month            *string  `json:"month,omitempty"`
	NumberOfProjects *int64   `json:"number_of_projects,omitempty"`
	TotalSpending    *float32 `json:"total_spending,omitempty"`
	Week             *string  `json:"week,omitempty"`
}
