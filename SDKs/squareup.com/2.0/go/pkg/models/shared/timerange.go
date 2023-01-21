package shared

// TimeRange
// Represents a generic time range. The start and end values are
// represented in RFC 3339 format. Time ranges are customized to be
// inclusive or exclusive based on the needs of a particular endpoint.
// Refer to the relevant endpoint-specific documentation to determine
// how time ranges are handled.
type TimeRange struct {
	EndAt   *string `json:"end_at,omitempty"`
	StartAt *string `json:"start_at,omitempty"`
}
