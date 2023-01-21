package shared

// ShiftWage
// The hourly wage rate used to compensate an employee for this shift.
type ShiftWage struct {
	HourlyRate *Money  `json:"hourly_rate,omitempty"`
	Title      *string `json:"title,omitempty"`
}
