package shared

// EditorialAssets
// Asset information, including size and thumbnail URLs
type EditorialAssets struct {
	MediumJpg     *ImageSizeDetails `json:"medium_jpg,omitempty"`
	Original      *ImageSizeDetails `json:"original,omitempty"`
	SmallJpg      *ImageSizeDetails `json:"small_jpg,omitempty"`
	Thumb170      *Thumbnail        `json:"thumb_170,omitempty"`
	Thumb220      *Thumbnail        `json:"thumb_220,omitempty"`
	Watermark1500 *Thumbnail        `json:"watermark_1500,omitempty"`
	Watermark450  *Thumbnail        `json:"watermark_450,omitempty"`
}
