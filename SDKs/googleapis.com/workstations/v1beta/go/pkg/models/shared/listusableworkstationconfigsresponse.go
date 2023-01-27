package shared

// ListUsableWorkstationConfigsResponse
// Response message for ListUsableWorkstationConfigs.
type ListUsableWorkstationConfigsResponse struct {
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	Unreachable        []string            `json:"unreachable,omitempty"`
	WorkstationConfigs []WorkstationConfig `json:"workstationConfigs,omitempty"`
}
