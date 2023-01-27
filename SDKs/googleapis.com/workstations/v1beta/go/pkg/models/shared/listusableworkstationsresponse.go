package shared

// ListUsableWorkstationsResponse
// Response message for ListUsableWorkstations.
type ListUsableWorkstationsResponse struct {
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	Unreachable   []string      `json:"unreachable,omitempty"`
	Workstations  []Workstation `json:"workstations,omitempty"`
}
