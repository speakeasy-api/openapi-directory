package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEditRequestEmployment
 * Employment information for the employee
**/
public class EmployeeEditRequestEmployment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_dates")
    public EmployeeEditRequestEmploymentEmploymentDates employmentDates;
    public EmployeeEditRequestEmployment withEmploymentDates(EmployeeEditRequestEmploymentEmploymentDates employmentDates) {
        this.employmentDates = employmentDates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_status")
    public EmployeeEditRequestEmploymentEmploymentStatusEnum employmentStatus;
    public EmployeeEditRequestEmployment withEmploymentStatus(EmployeeEditRequestEmploymentEmploymentStatusEnum employmentStatus) {
        this.employmentStatus = employmentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_worked")
    public Integer hoursWorked;
    public EmployeeEditRequestEmployment withHoursWorked(Integer hoursWorked) {
        this.hoursWorked = hoursWorked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occupation")
    public String occupation;
    public EmployeeEditRequestEmployment withOccupation(String occupation) {
        this.occupation = occupation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salary")
    public EmployeeEditRequestEmploymentSalary salary;
    public EmployeeEditRequestEmployment withSalary(EmployeeEditRequestEmploymentSalary salary) {
        this.salary = salary;
        return this;
    }
}