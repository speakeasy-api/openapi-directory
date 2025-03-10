// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type DocumentChunkMetadata struct {
	Author       *string  `json:"author,omitempty"`
	CollectionID *string  `json:"collection_id,omitempty"`
	CreatedAt    *string  `json:"created_at,omitempty"`
	DocumentID   *string  `json:"document_id,omitempty"`
	Keywords     []string `json:"keywords,omitempty"`
	Language     *string  `json:"language,omitempty"`
	// An enumeration.
	Source     *SourceEnum `json:"source,omitempty"`
	SourceID   *string     `json:"source_id,omitempty"`
	TimePeriod *string     `json:"time_period,omitempty"`
	UpdatedAt  *string     `json:"updated_at,omitempty"`
	URL        *string     `json:"url,omitempty"`
	UserID     *string     `json:"user_id,omitempty"`
}
