package shared

type TelegrafRequestMetadata struct {
	Buckets []string `json:"buckets,omitempty"`
}

type TelegrafRequest struct {
	Config      *string                  `json:"config,omitempty"`
	Description *string                  `json:"description,omitempty"`
	Metadata    *TelegrafRequestMetadata `json:"metadata,omitempty"`
	Name        *string                  `json:"name,omitempty"`
	OrgID       *string                  `json:"orgID,omitempty"`
}
