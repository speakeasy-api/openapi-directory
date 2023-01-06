package shared

// DisallowedResourceProblem
// A problem that indicates that the resource requested violates the precepts of this API.
type DisallowedResourceProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
