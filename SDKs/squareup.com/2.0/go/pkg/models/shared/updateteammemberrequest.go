package shared

// UpdateTeamMemberRequest
// Represents an update request for a `TeamMember` object.
type UpdateTeamMemberRequest struct {
	TeamMember *TeamMember `json:"team_member,omitempty"`
}
