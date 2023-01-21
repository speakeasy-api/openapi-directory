package shared

// BatchUploadInput
// Represents the parameters required to perform a batch upload
type BatchUploadInput struct {
	File [][]byte `multipartForm:"name=file,json"`
}
