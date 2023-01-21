package shared

// ShiftFilter
// Defines a filter used in a search for `Shift` records. `AND` logic is
// used by Square's servers to apply each filter property specified.
type ShiftFilter struct {
	EmployeeIds   []string      `json:"employee_ids,omitempty"`
	End           *TimeRange    `json:"end,omitempty"`
	LocationIds   []string      `json:"location_ids"`
	Start         *TimeRange    `json:"start,omitempty"`
	Status        *string       `json:"status,omitempty"`
	TeamMemberIds []string      `json:"team_member_ids"`
	Workday       *ShiftWorkday `json:"workday,omitempty"`
}
