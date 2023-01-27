package shared

// QueryDirectoryContentsResponse
// `QueryDirectoryContents` response message.
type QueryDirectoryContentsResponse struct {
	DirectoryEntries []DirectoryEntry `json:"directoryEntries,omitempty"`
	NextPageToken    *string          `json:"nextPageToken,omitempty"`
}
