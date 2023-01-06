package shared

// ListSnoozesResponse
// The results of a successful ListSnoozes call, containing the matching Snoozes.
type ListSnoozesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Snoozes       []Snooze `json:"snoozes,omitempty"`
}
