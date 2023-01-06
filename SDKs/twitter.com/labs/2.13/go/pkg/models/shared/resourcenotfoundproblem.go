package shared

// ResourceNotFoundProblem
// A problem that indicates that a given Tweet, User, etc. does not exist.
type ResourceNotFoundProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
