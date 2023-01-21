package shared

// ListEmployeeWagesResponse
// The response to a request for a set of `EmployeeWage` objects. The response contains
// a set of `EmployeeWage` objects.
type ListEmployeeWagesResponse struct {
	Cursor        *string        `json:"cursor,omitempty"`
	EmployeeWages []EmployeeWage `json:"employee_wages,omitempty"`
	Errors        []Error        `json:"errors,omitempty"`
}
