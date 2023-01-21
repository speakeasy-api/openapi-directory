package shared

// GetEmployeeWageResponse
// A response to a request to get an `EmployeeWage`. The response contains
// the requested `EmployeeWage` objects and might contain a set of `Error` objects if
// the request resulted in errors.
type GetEmployeeWageResponse struct {
	EmployeeWage *EmployeeWage `json:"employee_wage,omitempty"`
	Errors       []Error       `json:"errors,omitempty"`
}
