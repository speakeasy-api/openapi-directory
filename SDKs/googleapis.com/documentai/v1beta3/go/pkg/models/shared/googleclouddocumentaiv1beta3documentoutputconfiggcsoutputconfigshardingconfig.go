package shared

// GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig
// The sharding config for the output document.
type GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfigShardingConfig struct {
	PagesOverlap  *int32 `json:"pagesOverlap,omitempty"`
	PagesPerShard *int32 `json:"pagesPerShard,omitempty"`
}
