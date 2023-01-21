package shared

type AddResourceMemberRequestBody struct {
	ID   string  `json:"id"`
	Name *string `json:"name,omitempty"`
}
