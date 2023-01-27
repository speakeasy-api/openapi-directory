package shared

// FetchFileDiffResponse
// `FetchFileDiff` response message.
type FetchFileDiffResponse struct {
	FormattedDiff *string `json:"formattedDiff,omitempty"`
}
