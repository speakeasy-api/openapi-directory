package shared

type LinkedSourceDocumentSourceEnum string

const (
	LinkedSourceDocumentSourceEnumDropbox     LinkedSourceDocumentSourceEnum = "dropbox"
	LinkedSourceDocumentSourceEnumGoogledrive LinkedSourceDocumentSourceEnum = "googledrive"
	LinkedSourceDocumentSourceEnumIcloud      LinkedSourceDocumentSourceEnum = "icloud"
)

type LinkedSourceDocument struct {
	Name   *string                         `json:"name,omitempty"`
	Size   *int64                          `json:"size,omitempty"`
	Source *LinkedSourceDocumentSourceEnum `json:"source,omitempty"`
	URL    *string                         `json:"url,omitempty"`
}
