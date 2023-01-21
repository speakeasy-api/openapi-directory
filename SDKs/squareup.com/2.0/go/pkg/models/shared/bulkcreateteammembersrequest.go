package shared

// BulkCreateTeamMembersRequest
// Represents a bulk create request for `TeamMember` objects.
type BulkCreateTeamMembersRequest struct {
	TeamMembers map[string]CreateTeamMemberRequest `json:"team_members"`
}
