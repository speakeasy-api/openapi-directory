package shared

// ResourceUnauthorizedProblem
// A problem that indicates you are not allowed to see a particular Tweet, User, etc.
type ResourceUnauthorizedProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
