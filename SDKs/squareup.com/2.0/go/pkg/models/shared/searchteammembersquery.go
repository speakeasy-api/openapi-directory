package shared

// SearchTeamMembersQuery
// Represents the parameters in a search for `TeamMember` objects.
type SearchTeamMembersQuery struct {
	Filter *SearchTeamMembersFilter `json:"filter,omitempty"`
}
