package shared

// GetTeamMemberWageResponse
// A response to a request to get a `TeamMemberWage`. The response contains
// the requested `TeamMemberWage` objects and might contain a set of `Error` objects if
// the request resulted in errors.
type GetTeamMemberWageResponse struct {
	Errors         []Error         `json:"errors,omitempty"`
	TeamMemberWage *TeamMemberWage `json:"team_member_wage,omitempty"`
}
