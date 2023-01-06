package shared

// Link
// A link **MUST** be represented as either: a string containing the link's URL or a link object.
type Link struct {
	Href string                 `json:"href"`
	Meta map[string]interface{} `json:"meta,omitempty"`
}
