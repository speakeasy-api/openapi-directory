package shared

// GoogleCloudContentwarehouseV1RemoveFromFolderAction
// Represents the action responsible for remove a document from a specific folder.
type GoogleCloudContentwarehouseV1RemoveFromFolderAction struct {
	Condition *string `json:"condition,omitempty"`
	Folder    *string `json:"folder,omitempty"`
}
