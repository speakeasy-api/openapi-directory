package shared

// EditorialVideoAssets
// Asset information, including size and thumbnail URLs
type EditorialVideoAssets struct {
	Original    *VideoSizeDetails `json:"original,omitempty"`
	PreviewMp4  *VideoPreviewURL  `json:"preview_mp4,omitempty"`
	PreviewWebm *VideoPreviewURL  `json:"preview_webm,omitempty"`
	ThumbJpg    *VideoPreviewURL  `json:"thumb_jpg,omitempty"`
}
