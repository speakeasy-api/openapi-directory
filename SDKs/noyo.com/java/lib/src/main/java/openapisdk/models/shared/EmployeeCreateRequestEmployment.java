package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeCreateRequestEmployment
 * Employment information for the employee
**/
public class EmployeeCreateRequestEmployment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_dates")
    public EmployeeCreateRequestEmploymentEmploymentDates employmentDates;
    public EmployeeCreateRequestEmployment withEmploymentDates(EmployeeCreateRequestEmploymentEmploymentDates employmentDates) {
        this.employmentDates = employmentDates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_status")
    public EmployeeCreateRequestEmploymentEmploymentStatusEnum employmentStatus;
    public EmployeeCreateRequestEmployment withEmploymentStatus(EmployeeCreateRequestEmploymentEmploymentStatusEnum employmentStatus) {
        this.employmentStatus = employmentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_worked")
    public Integer hoursWorked;
    public EmployeeCreateRequestEmployment withHoursWorked(Integer hoursWorked) {
        this.hoursWorked = hoursWorked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occupation")
    public String occupation;
    public EmployeeCreateRequestEmployment withOccupation(String occupation) {
        this.occupation = occupation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salary")
    public EmployeeCreateRequestEmploymentSalary salary;
    public EmployeeCreateRequestEmployment withSalary(EmployeeCreateRequestEmploymentSalary salary) {
        this.salary = salary;
        return this;
    }
}