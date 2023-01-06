package shared

// VideoAssets
// Video asset information
type VideoAssets struct {
	Fourk       *VideoSizeDetails `json:"4k,omitempty"`
	Hd          *VideoSizeDetails `json:"hd,omitempty"`
	PreviewJpg  *URL              `json:"preview_jpg,omitempty"`
	PreviewMp4  *URL              `json:"preview_mp4,omitempty"`
	PreviewWebm *URL              `json:"preview_webm,omitempty"`
	Sd          *VideoSizeDetails `json:"sd,omitempty"`
	ThumbJpg    *URL              `json:"thumb_jpg,omitempty"`
	ThumbJpgs   *Urls             `json:"thumb_jpgs,omitempty"`
	ThumbMp4    *URL              `json:"thumb_mp4,omitempty"`
	ThumbWebm   *URL              `json:"thumb_webm,omitempty"`
	Web         *VideoSizeDetails `json:"web,omitempty"`
}
