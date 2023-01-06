package shared

// Link
// A link to a related resource, or an empty object if there is no resource to link to
type Link struct {
	Href string  `json:"href"`
	Type *string `json:"type,omitempty"`
}
