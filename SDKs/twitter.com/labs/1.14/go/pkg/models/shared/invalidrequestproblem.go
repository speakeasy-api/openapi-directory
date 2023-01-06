package shared

// InvalidRequestProblem
// A problem that indicates this request is invalid.
type InvalidRequestProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
