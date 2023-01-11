package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEditRequestEmploymentSalary
 * Employee salary information
**/
public class EmployeeEditRequestEmploymentSalary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public EmployeeEditRequestEmploymentSalary withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public EmployeeEditRequestEmploymentSalaryTypeEnum type;
    public EmployeeEditRequestEmploymentSalary withType(EmployeeEditRequestEmploymentSalaryTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public EmployeeEditRequestEmploymentSalaryUnitEnum unit;
    public EmployeeEditRequestEmploymentSalary withUnit(EmployeeEditRequestEmploymentSalaryUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}