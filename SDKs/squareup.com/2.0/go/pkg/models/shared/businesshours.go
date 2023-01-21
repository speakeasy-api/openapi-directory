package shared

// BusinessHours
// Represents the hours of operation for a business location.
type BusinessHours struct {
	Periods []BusinessHoursPeriod `json:"periods,omitempty"`
}
