package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StagedEmployeeDepartmentPosition
 * The Department Position model
**/
public class StagedEmployeeDepartmentPosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeReason")
    public String changeReason;
    public StagedEmployeeDepartmentPosition withChangeReason(String changeReason) {
        this.changeReason = changeReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clockBadgeNumber")
    public String clockBadgeNumber;
    public StagedEmployeeDepartmentPosition withClockBadgeNumber(String clockBadgeNumber) {
        this.clockBadgeNumber = clockBadgeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter1")
    public String costCenter1;
    public StagedEmployeeDepartmentPosition withCostCenter1(String costCenter1) {
        this.costCenter1 = costCenter1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter2")
    public String costCenter2;
    public StagedEmployeeDepartmentPosition withCostCenter2(String costCenter2) {
        this.costCenter2 = costCenter2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter3")
    public String costCenter3;
    public StagedEmployeeDepartmentPosition withCostCenter3(String costCenter3) {
        this.costCenter3 = costCenter3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public String effectiveDate;
    public StagedEmployeeDepartmentPosition withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeeType")
    public String employeeType;
    public StagedEmployeeDepartmentPosition withEmployeeType(String employeeType) {
        this.employeeType = employeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equalEmploymentOpportunityClass")
    public String equalEmploymentOpportunityClass;
    public StagedEmployeeDepartmentPosition withEqualEmploymentOpportunityClass(String equalEmploymentOpportunityClass) {
        this.equalEmploymentOpportunityClass = equalEmploymentOpportunityClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isMinimumWageExempt")
    public Boolean isMinimumWageExempt;
    public StagedEmployeeDepartmentPosition withIsMinimumWageExempt(Boolean isMinimumWageExempt) {
        this.isMinimumWageExempt = isMinimumWageExempt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isOvertimeExempt")
    public Boolean isOvertimeExempt;
    public StagedEmployeeDepartmentPosition withIsOvertimeExempt(Boolean isOvertimeExempt) {
        this.isOvertimeExempt = isOvertimeExempt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSupervisorReviewer")
    public Boolean isSupervisorReviewer;
    public StagedEmployeeDepartmentPosition withIsSupervisorReviewer(Boolean isSupervisorReviewer) {
        this.isSupervisorReviewer = isSupervisorReviewer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isUnionDuesCollected")
    public Boolean isUnionDuesCollected;
    public StagedEmployeeDepartmentPosition withIsUnionDuesCollected(Boolean isUnionDuesCollected) {
        this.isUnionDuesCollected = isUnionDuesCollected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isUnionInitiationCollected")
    public Boolean isUnionInitiationCollected;
    public StagedEmployeeDepartmentPosition withIsUnionInitiationCollected(Boolean isUnionInitiationCollected) {
        this.isUnionInitiationCollected = isUnionInitiationCollected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTitle")
    public String jobTitle;
    public StagedEmployeeDepartmentPosition withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payGroup")
    public String payGroup;
    public StagedEmployeeDepartmentPosition withPayGroup(String payGroup) {
        this.payGroup = payGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positionCode")
    public String positionCode;
    public StagedEmployeeDepartmentPosition withPositionCode(String positionCode) {
        this.positionCode = positionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shift")
    public String shift;
    public StagedEmployeeDepartmentPosition withShift(String shift) {
        this.shift = shift;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supervisorCompanyNumber")
    public String supervisorCompanyNumber;
    public StagedEmployeeDepartmentPosition withSupervisorCompanyNumber(String supervisorCompanyNumber) {
        this.supervisorCompanyNumber = supervisorCompanyNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supervisorEmployeeId")
    public String supervisorEmployeeId;
    public StagedEmployeeDepartmentPosition withSupervisorEmployeeId(String supervisorEmployeeId) {
        this.supervisorEmployeeId = supervisorEmployeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tipped")
    public String tipped;
    public StagedEmployeeDepartmentPosition withTipped(String tipped) {
        this.tipped = tipped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unionAffiliationDate")
    public String unionAffiliationDate;
    public StagedEmployeeDepartmentPosition withUnionAffiliationDate(String unionAffiliationDate) {
        this.unionAffiliationDate = unionAffiliationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unionCode")
    public String unionCode;
    public StagedEmployeeDepartmentPosition withUnionCode(String unionCode) {
        this.unionCode = unionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unionPosition")
    public String unionPosition;
    public StagedEmployeeDepartmentPosition withUnionPosition(String unionPosition) {
        this.unionPosition = unionPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workersCompensation")
    public String workersCompensation;
    public StagedEmployeeDepartmentPosition withWorkersCompensation(String workersCompensation) {
        this.workersCompensation = workersCompensation;
        return this;
    }
}