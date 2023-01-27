package shared

// FetchGitAheadBehindResponse
// `FetchGitAheadBehind` response message.
type FetchGitAheadBehindResponse struct {
	CommitsAhead  *int32 `json:"commitsAhead,omitempty"`
	CommitsBehind *int32 `json:"commitsBehind,omitempty"`
}
