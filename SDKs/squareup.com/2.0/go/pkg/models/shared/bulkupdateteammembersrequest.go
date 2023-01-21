package shared

// BulkUpdateTeamMembersRequest
// Represents a bulk update request for `TeamMember` objects.
type BulkUpdateTeamMembersRequest struct {
	TeamMembers map[string]UpdateTeamMemberRequest `json:"team_members"`
}
