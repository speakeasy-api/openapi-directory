package shared

type AnalyzeQueryResponseErrors struct {
	Character *int64  `json:"character,omitempty"`
	Column    *int64  `json:"column,omitempty"`
	Line      *int64  `json:"line,omitempty"`
	Message   *string `json:"message,omitempty"`
}

type AnalyzeQueryResponse struct {
	Errors []AnalyzeQueryResponseErrors `json:"errors,omitempty"`
}
