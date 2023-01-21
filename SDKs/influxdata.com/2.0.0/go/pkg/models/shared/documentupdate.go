package shared

type DocumentUpdateInput struct {
	Content map[string]interface{} `json:"content,omitempty"`
	Meta    *DocumentMetaInput     `json:"meta,omitempty"`
}
