package shared

// ImageCreateRequest
// Request to upload an image
type ImageCreateRequest struct {
	Base64Image string `json:"base64_image"`
}
