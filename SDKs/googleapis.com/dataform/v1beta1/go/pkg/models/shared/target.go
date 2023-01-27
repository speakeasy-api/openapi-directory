package shared

// Target
// Represents an action identifier. If the action writes output, the output will be written to the referenced database object.
type Target struct {
	Database *string `json:"database,omitempty"`
	Name     *string `json:"name,omitempty"`
	Schema   *string `json:"schema,omitempty"`
}
