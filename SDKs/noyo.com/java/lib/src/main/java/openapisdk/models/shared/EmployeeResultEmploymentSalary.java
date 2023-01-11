package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeResultEmploymentSalary
 * Employee salary information
**/
public class EmployeeResultEmploymentSalary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public EmployeeResultEmploymentSalary withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public EmployeeResultEmploymentSalaryTypeEnum type;
    public EmployeeResultEmploymentSalary withType(EmployeeResultEmploymentSalaryTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public EmployeeResultEmploymentSalaryUnitEnum unit;
    public EmployeeResultEmploymentSalary withUnit(EmployeeResultEmploymentSalaryUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}