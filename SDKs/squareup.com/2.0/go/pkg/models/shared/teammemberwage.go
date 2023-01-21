package shared

// TeamMemberWage
// The hourly wage rate that a team member earns on a `Shift` for doing the job
// specified by the `title` property of this object.
type TeamMemberWage struct {
	HourlyRate   *Money  `json:"hourly_rate,omitempty"`
	ID           *string `json:"id,omitempty"`
	TeamMemberID *string `json:"team_member_id,omitempty"`
	Title        *string `json:"title,omitempty"`
}
