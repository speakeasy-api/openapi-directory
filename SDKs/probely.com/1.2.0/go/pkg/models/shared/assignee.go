package shared

// Assignee
// Assigned user
type Assignee struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}
