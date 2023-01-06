package shared

// ImageAssets
// Information about the assets that are part of an image
type ImageAssets struct {
	HugeJpg      *ImageSizeDetails `json:"huge_jpg,omitempty"`
	HugeThumb    *Thumbnail        `json:"huge_thumb,omitempty"`
	LargeThumb   *Thumbnail        `json:"large_thumb,omitempty"`
	MediumJpg    *ImageSizeDetails `json:"medium_jpg,omitempty"`
	Preview      *Thumbnail        `json:"preview,omitempty"`
	Preview1000  *Thumbnail        `json:"preview_1000,omitempty"`
	Preview1500  *Thumbnail        `json:"preview_1500,omitempty"`
	SmallJpg     *ImageSizeDetails `json:"small_jpg,omitempty"`
	SmallThumb   *Thumbnail        `json:"small_thumb,omitempty"`
	SupersizeJpg *ImageSizeDetails `json:"supersize_jpg,omitempty"`
	VectorEps    *ImageSizeDetails `json:"vector_eps,omitempty"`
}
