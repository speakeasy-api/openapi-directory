package shared

// UsageCapExceededProblem
// A problem that indicates that a usage cap has been exceeded.
type UsageCapExceededProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
