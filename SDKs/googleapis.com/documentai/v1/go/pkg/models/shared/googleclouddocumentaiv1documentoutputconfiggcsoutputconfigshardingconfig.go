package shared

// GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig
// The sharding config for the output document.
type GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfigShardingConfig struct {
	PagesOverlap  *int32 `json:"pagesOverlap,omitempty"`
	PagesPerShard *int32 `json:"pagesPerShard,omitempty"`
}
