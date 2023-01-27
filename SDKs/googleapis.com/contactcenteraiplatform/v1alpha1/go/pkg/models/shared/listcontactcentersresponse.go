package shared

// ListContactCentersResponse
// Message for response to listing ContactCenters
type ListContactCentersResponse struct {
	ContactCenters []ContactCenter `json:"contactCenters,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	Unreachable    []string        `json:"unreachable,omitempty"`
}
