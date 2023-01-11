package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class PostCompanyEmployeesRequestBody {
    @SpeakeasyMetadata("form:name=employee[department]")
    public String employeeDepartment;
    public PostCompanyEmployeesRequestBody withEmployeeDepartment(String employeeDepartment) {
        this.employeeDepartment = employeeDepartment;
        return this;
    }
    @SpeakeasyMetadata("form:name=employee[email]")
    public String employeeEmail;
    public PostCompanyEmployeesRequestBody withEmployeeEmail(String employeeEmail) {
        this.employeeEmail = employeeEmail;
        return this;
    }
    @SpeakeasyMetadata("form:name=employee[first_name]")
    public String employeeFirstName;
    public PostCompanyEmployeesRequestBody withEmployeeFirstName(String employeeFirstName) {
        this.employeeFirstName = employeeFirstName;
        return this;
    }
    @SpeakeasyMetadata("form:name=employee[gender]")
    public PostCompanyEmployeesRequestBodyEmployeeGenderEnum employeeGender;
    public PostCompanyEmployeesRequestBody withEmployeeGender(PostCompanyEmployeesRequestBodyEmployeeGenderEnum employeeGender) {
        this.employeeGender = employeeGender;
        return this;
    }
    @SpeakeasyMetadata("form:name=employee[hire_date]")
    public LocalDate employeeHireDate;
    public PostCompanyEmployeesRequestBody withEmployeeHireDate(LocalDate employeeHireDate) {
        this.employeeHireDate = employeeHireDate;
        return this;
    }
    @SpeakeasyMetadata("form:name=employee[last_name]")
    public String employeeLastName;
    public PostCompanyEmployeesRequestBody withEmployeeLastName(String employeeLastName) {
        this.employeeLastName = employeeLastName;
        return this;
    }
    @SpeakeasyMetadata("form:name=employee[position]")
    public String employeePosition;
    public PostCompanyEmployeesRequestBody withEmployeePosition(String employeePosition) {
        this.employeePosition = employeePosition;
        return this;
    }
    @SpeakeasyMetadata("form:name=employee[weekly_hours]")
    public Double employeeWeeklyHours;
    public PostCompanyEmployeesRequestBody withEmployeeWeeklyHours(Double employeeWeeklyHours) {
        this.employeeWeeklyHours = employeeWeeklyHours;
        return this;
    }
}