package shared

// BulkUpdateTeamMembersResponse
// Represents a response from a bulk update request containing the updated `TeamMember` objects or error messages.
type BulkUpdateTeamMembersResponse struct {
	Errors      []Error                             `json:"errors,omitempty"`
	TeamMembers map[string]UpdateTeamMemberResponse `json:"team_members,omitempty"`
}
