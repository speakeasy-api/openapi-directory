package shared

// JobAssignment
// An object describing a job that a team member is assigned to.
type JobAssignment struct {
	AnnualRate  *Money `json:"annual_rate,omitempty"`
	HourlyRate  *Money `json:"hourly_rate,omitempty"`
	JobTitle    string `json:"job_title"`
	PayType     string `json:"pay_type"`
	WeeklyHours *int64 `json:"weekly_hours,omitempty"`
}
