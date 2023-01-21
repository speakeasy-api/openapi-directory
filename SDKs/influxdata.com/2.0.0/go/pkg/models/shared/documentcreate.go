package shared

type DocumentCreateInput struct {
	Content map[string]interface{} `json:"content"`
	Labels  []string               `json:"labels,omitempty"`
	Meta    DocumentMetaInput      `json:"meta"`
	Org     *string                `json:"org,omitempty"`
	OrgID   *string                `json:"orgID,omitempty"`
}
