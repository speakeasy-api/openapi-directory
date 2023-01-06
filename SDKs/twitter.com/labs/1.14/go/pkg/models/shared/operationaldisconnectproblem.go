package shared

// OperationalDisconnectProblem
// You have been disconnected for operational reasons.
type OperationalDisconnectProblem struct {
	Detail string `json:"detail"`
	Title  string `json:"title"`
	Type   string `json:"type"`
}
