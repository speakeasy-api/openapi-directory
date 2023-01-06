package shared

// ConnectionExceptionProblem
// A problem that indicates something is wrong with the connection
type ConnectionExceptionProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
