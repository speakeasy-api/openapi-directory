package shared

// EmployeeWage
// The hourly wage rate that an employee earns on a `Shift` for doing the job
// specified by the `title` property of this object. Deprecated at version 2020-08-26. Use `TeamMemberWage` instead.
type EmployeeWage struct {
	EmployeeID *string `json:"employee_id,omitempty"`
	HourlyRate *Money  `json:"hourly_rate,omitempty"`
	ID         *string `json:"id,omitempty"`
	Title      *string `json:"title,omitempty"`
}
