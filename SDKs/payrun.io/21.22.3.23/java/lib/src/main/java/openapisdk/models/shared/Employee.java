package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Employee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Employee")
    public EmployeeEmployee employee;
    public Employee withEmployee(EmployeeEmployee employee) {
        this.employee = employee;
        return this;
    }
}