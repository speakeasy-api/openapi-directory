package shared

// BulkCreateTeamMembersResponse
// Represents a response from a bulk create request containing the created `TeamMember` objects or error messages.
type BulkCreateTeamMembersResponse struct {
	Errors      []Error                             `json:"errors,omitempty"`
	TeamMembers map[string]CreateTeamMemberResponse `json:"team_members,omitempty"`
}
