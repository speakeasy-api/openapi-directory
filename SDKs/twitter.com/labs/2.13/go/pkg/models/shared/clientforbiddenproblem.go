package shared

// ClientForbiddenProblem
// A problem that indicates your client is forbidden from making this request.
type ClientForbiddenProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
