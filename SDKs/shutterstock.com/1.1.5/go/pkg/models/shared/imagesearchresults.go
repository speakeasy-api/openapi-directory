package shared

// ImageSearchResults
// Image search results
type ImageSearchResults struct {
	Data           []Image                `json:"data"`
	Message        *string                `json:"message,omitempty"`
	Page           *int64                 `json:"page,omitempty"`
	PerPage        *int64                 `json:"per_page,omitempty"`
	SearchID       string                 `json:"search_id"`
	SpellcheckInfo map[string]interface{} `json:"spellcheck_info,omitempty"`
	TotalCount     int64                  `json:"total_count"`
}
