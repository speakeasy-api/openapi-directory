package shared

type PatchOrganizationRequest struct {
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
}
