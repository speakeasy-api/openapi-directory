package shared

// ErrorErrorLinks
// A Links object specific to Error objects
type ErrorErrorLinks struct {
	About *interface{} `json:"about,omitempty"`
}

// ErrorErrorSource
// an object containing references to the source of the error
type ErrorErrorSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

// Error
// An error response
type Error struct {
	Code   *string                `json:"code,omitempty"`
	Detail *string                `json:"detail,omitempty"`
	ID     *string                `json:"id,omitempty"`
	Links  *ErrorErrorLinks       `json:"links,omitempty"`
	Meta   map[string]interface{} `json:"meta,omitempty"`
	Source *ErrorErrorSource      `json:"source,omitempty"`
	Status *string                `json:"status,omitempty"`
	Title  *string                `json:"title,omitempty"`
}
