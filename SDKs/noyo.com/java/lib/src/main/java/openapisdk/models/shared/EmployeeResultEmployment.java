package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeResultEmployment
 * Employment information for the employee
**/
public class EmployeeResultEmployment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_dates")
    public EmployeeResultEmploymentEmploymentDates employmentDates;
    public EmployeeResultEmployment withEmploymentDates(EmployeeResultEmploymentEmploymentDates employmentDates) {
        this.employmentDates = employmentDates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_status")
    public EmployeeResultEmploymentEmploymentStatusEnum employmentStatus;
    public EmployeeResultEmployment withEmploymentStatus(EmployeeResultEmploymentEmploymentStatusEnum employmentStatus) {
        this.employmentStatus = employmentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_worked")
    public Integer hoursWorked;
    public EmployeeResultEmployment withHoursWorked(Integer hoursWorked) {
        this.hoursWorked = hoursWorked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occupation")
    public String occupation;
    public EmployeeResultEmployment withOccupation(String occupation) {
        this.occupation = occupation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salary")
    public EmployeeResultEmploymentSalary salary;
    public EmployeeResultEmployment withSalary(EmployeeResultEmploymentSalary salary) {
        this.salary = salary;
        return this;
    }
}