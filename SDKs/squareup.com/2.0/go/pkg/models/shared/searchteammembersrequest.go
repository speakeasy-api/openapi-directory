package shared

// SearchTeamMembersRequest
// Represents a search request for a filtered list of `TeamMember` objects.
type SearchTeamMembersRequest struct {
	Cursor *string                 `json:"cursor,omitempty"`
	Limit  *int64                  `json:"limit,omitempty"`
	Query  *SearchTeamMembersQuery `json:"query,omitempty"`
}
