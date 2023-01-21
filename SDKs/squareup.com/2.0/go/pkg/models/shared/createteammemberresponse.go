package shared

// CreateTeamMemberResponse
// Represents a response from a create request containing the created `TeamMember` object or error messages.
type CreateTeamMemberResponse struct {
	Errors     []Error     `json:"errors,omitempty"`
	TeamMember *TeamMember `json:"team_member,omitempty"`
}
