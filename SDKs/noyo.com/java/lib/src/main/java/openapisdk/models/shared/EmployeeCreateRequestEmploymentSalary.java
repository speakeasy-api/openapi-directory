package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeCreateRequestEmploymentSalary
 * Employee salary information
**/
public class EmployeeCreateRequestEmploymentSalary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public EmployeeCreateRequestEmploymentSalary withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public EmployeeCreateRequestEmploymentSalaryTypeEnum type;
    public EmployeeCreateRequestEmploymentSalary withType(EmployeeCreateRequestEmploymentSalaryTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public EmployeeCreateRequestEmploymentSalaryUnitEnum unit;
    public EmployeeCreateRequestEmploymentSalary withUnit(EmployeeCreateRequestEmploymentSalaryUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}