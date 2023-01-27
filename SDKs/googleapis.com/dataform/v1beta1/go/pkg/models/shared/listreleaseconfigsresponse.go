package shared

// ListReleaseConfigsResponse
// `ListReleaseConfigs` response message.
type ListReleaseConfigsResponse struct {
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	ReleaseConfigs []ReleaseConfig `json:"releaseConfigs,omitempty"`
	Unreachable    []string        `json:"unreachable,omitempty"`
}
