package shared

// SearchTeamMembersFilter
// Represents a filter used in a search for `TeamMember` objects. `AND` logic is applied
// between the individual fields, and `OR` logic is applied within list-based fields.
// For example, setting this filter value:
// ```
// filter = (locations_ids = ["A", "B"], status = ACTIVE)
// ```
// returns only active team members assigned to either location "A" or "B".
type SearchTeamMembersFilter struct {
	LocationIds []string `json:"location_ids,omitempty"`
	Status      *string  `json:"status,omitempty"`
}
