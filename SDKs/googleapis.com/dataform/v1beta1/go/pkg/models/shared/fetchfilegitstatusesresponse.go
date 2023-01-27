package shared

// FetchFileGitStatusesResponse
// `FetchFileGitStatuses` response message.
type FetchFileGitStatusesResponse struct {
	UncommittedFileChanges []UncommittedFileChange `json:"uncommittedFileChanges,omitempty"`
}
