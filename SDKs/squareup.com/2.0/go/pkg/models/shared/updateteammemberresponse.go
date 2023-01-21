package shared

// UpdateTeamMemberResponse
// Represents a response from an update request containing the updated `TeamMember` object or error messages.
type UpdateTeamMemberResponse struct {
	Errors     []Error     `json:"errors,omitempty"`
	TeamMember *TeamMember `json:"team_member,omitempty"`
}
