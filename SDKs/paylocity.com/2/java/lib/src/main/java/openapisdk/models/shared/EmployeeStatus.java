package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeStatus
 * Add or update employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.
**/
public class EmployeeStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustedSeniorityDate")
    public String adjustedSeniorityDate;
    public EmployeeStatus withAdjustedSeniorityDate(String adjustedSeniorityDate) {
        this.adjustedSeniorityDate = adjustedSeniorityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeReason")
    public String changeReason;
    public EmployeeStatus withChangeReason(String changeReason) {
        this.changeReason = changeReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public String effectiveDate;
    public EmployeeStatus withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeeStatus")
    public String employeeStatus;
    public EmployeeStatus withEmployeeStatus(String employeeStatus) {
        this.employeeStatus = employeeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hireDate")
    public String hireDate;
    public EmployeeStatus withHireDate(String hireDate) {
        this.hireDate = hireDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEligibleForRehire")
    public Boolean isEligibleForRehire;
    public EmployeeStatus withIsEligibleForRehire(Boolean isEligibleForRehire) {
        this.isEligibleForRehire = isEligibleForRehire;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reHireDate")
    public String reHireDate;
    public EmployeeStatus withReHireDate(String reHireDate) {
        this.reHireDate = reHireDate;
        return this;
    }
}