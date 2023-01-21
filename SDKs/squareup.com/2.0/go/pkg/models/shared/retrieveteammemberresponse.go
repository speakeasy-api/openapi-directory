package shared

// RetrieveTeamMemberResponse
// Represents a response from a retrieve request containing a `TeamMember` object or error messages.
type RetrieveTeamMemberResponse struct {
	Errors     []Error     `json:"errors,omitempty"`
	TeamMember *TeamMember `json:"team_member,omitempty"`
}
