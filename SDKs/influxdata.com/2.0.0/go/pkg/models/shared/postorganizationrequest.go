package shared

type PostOrganizationRequest struct {
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`
}
