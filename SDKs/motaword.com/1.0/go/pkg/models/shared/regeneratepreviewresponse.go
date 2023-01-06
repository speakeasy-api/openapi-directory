package shared

type RegeneratePreviewResponse struct {
	Link   *Href   `json:"link,omitempty"`
	Source *string `json:"source,omitempty"`
}
