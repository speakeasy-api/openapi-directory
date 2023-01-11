package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StagedEmployeeStatus
 * The employee status model
**/
public class StagedEmployeeStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustedSeniorityDate")
    public String adjustedSeniorityDate;
    public StagedEmployeeStatus withAdjustedSeniorityDate(String adjustedSeniorityDate) {
        this.adjustedSeniorityDate = adjustedSeniorityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeReason")
    public String changeReason;
    public StagedEmployeeStatus withChangeReason(String changeReason) {
        this.changeReason = changeReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public String effectiveDate;
    public StagedEmployeeStatus withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeeStatus")
    public String employeeStatus;
    public StagedEmployeeStatus withEmployeeStatus(String employeeStatus) {
        this.employeeStatus = employeeStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hireDate")
    public String hireDate;
    public StagedEmployeeStatus withHireDate(String hireDate) {
        this.hireDate = hireDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEligibleForRehire")
    public Boolean isEligibleForRehire;
    public StagedEmployeeStatus withIsEligibleForRehire(Boolean isEligibleForRehire) {
        this.isEligibleForRehire = isEligibleForRehire;
        return this;
    }
}