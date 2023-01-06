package shared

// OptimadeErrorErrorLinks
// A Links object specific to Error objects
type OptimadeErrorErrorLinks struct {
	About *interface{} `json:"about,omitempty"`
}

// OptimadeErrorErrorSource
// an object containing references to the source of the error
type OptimadeErrorErrorSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

// OptimadeError
// detail MUST be present
type OptimadeError struct {
	Code   *string                   `json:"code,omitempty"`
	Detail string                    `json:"detail"`
	ID     *string                   `json:"id,omitempty"`
	Links  *OptimadeErrorErrorLinks  `json:"links,omitempty"`
	Meta   map[string]interface{}    `json:"meta,omitempty"`
	Source *OptimadeErrorErrorSource `json:"source,omitempty"`
	Status *string                   `json:"status,omitempty"`
	Title  *string                   `json:"title,omitempty"`
}
