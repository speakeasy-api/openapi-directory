package shared

// ListWorkstationsResponse
// Response message for ListWorkstations.
type ListWorkstationsResponse struct {
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	Unreachable   []string      `json:"unreachable,omitempty"`
	Workstations  []Workstation `json:"workstations,omitempty"`
}
