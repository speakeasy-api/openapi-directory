package shared

// WarningsErrorLinks
// A Links object specific to Error objects
type WarningsErrorLinks struct {
	About *interface{} `json:"about,omitempty"`
}

// WarningsErrorSource
// an object containing references to the source of the error
type WarningsErrorSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

// Warnings
// OPTIMADE-specific warning class based on OPTIMADE-specific JSON API Error.
//
// From the specification:
//
// A warning resource object is defined similarly to a JSON API error object, but MUST also include the field type, which MUST have the value "warning".
// The field detail MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.
//
// Note: Must be named "Warnings", since "Warning" is a built-in Python class.
type Warnings struct {
	Code   *string                `json:"code,omitempty"`
	Detail string                 `json:"detail"`
	ID     *string                `json:"id,omitempty"`
	Links  *WarningsErrorLinks    `json:"links,omitempty"`
	Meta   map[string]interface{} `json:"meta,omitempty"`
	Source *WarningsErrorSource   `json:"source,omitempty"`
	Title  *string                `json:"title,omitempty"`
	Type   string                 `json:"type"`
}
