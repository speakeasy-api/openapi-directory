package shared

// SearchTeamMembersResponse
// Represents a response from a search request containing a filtered list of `TeamMember` objects.
type SearchTeamMembersResponse struct {
	Cursor      *string      `json:"cursor,omitempty"`
	Errors      []Error      `json:"errors,omitempty"`
	TeamMembers []TeamMember `json:"team_members,omitempty"`
}
