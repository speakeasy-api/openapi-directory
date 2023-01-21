package shared

type LabelCreateRequest struct {
	Name       string            `json:"name"`
	OrgID      string            `json:"orgID"`
	Properties map[string]string `json:"properties,omitempty"`
}
