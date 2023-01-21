package shared

// SegmentFilter
// A query filter to search for appointment segments by.
type SegmentFilter struct {
	ServiceVariationID string       `json:"service_variation_id"`
	TeamMemberIDFilter *FilterValue `json:"team_member_id_filter,omitempty"`
}
