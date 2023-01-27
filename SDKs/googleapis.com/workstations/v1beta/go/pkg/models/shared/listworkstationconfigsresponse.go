package shared

// ListWorkstationConfigsResponse
// Response message for ListWorkstationConfigs.
type ListWorkstationConfigsResponse struct {
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	Unreachable        []string            `json:"unreachable,omitempty"`
	WorkstationConfigs []WorkstationConfig `json:"workstationConfigs,omitempty"`
}
