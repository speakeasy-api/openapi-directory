// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// Blob - Blob
type Blob struct {
	Content            string  `json:"content"`
	Encoding           string  `json:"encoding"`
	HighlightedContent *string `json:"highlighted_content,omitempty"`
	NodeID             string  `json:"node_id"`
	Sha                string  `json:"sha"`
	Size               int64   `json:"size"`
	URL                string  `json:"url"`
}
