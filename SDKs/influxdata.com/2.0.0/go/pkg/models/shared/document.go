package shared

type DocumentLinks struct {
	Self *string `json:"self,omitempty"`
}

type Document struct {
	Content map[string]interface{} `json:"content"`
	ID      string                 `json:"id"`
	Labels  []Label                `json:"labels,omitempty"`
	Links   *DocumentLinks         `json:"links,omitempty"`
	Meta    DocumentMeta           `json:"meta"`
}
