package shared

// ListTeamMemberWagesResponse
// The response to a request for a set of `TeamMemberWage` objects. The response contains
// a set of `TeamMemberWage` objects.
type ListTeamMemberWagesResponse struct {
	Cursor          *string          `json:"cursor,omitempty"`
	Errors          []Error          `json:"errors,omitempty"`
	TeamMemberWages []TeamMemberWage `json:"team_member_wages,omitempty"`
}
