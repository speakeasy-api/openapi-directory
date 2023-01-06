package shared

// OptionalLink
// A link to a related resource, or an empty object if there is no resource to link to
type OptionalLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}
