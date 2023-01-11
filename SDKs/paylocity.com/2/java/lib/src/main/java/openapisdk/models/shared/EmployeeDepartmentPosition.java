package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeDepartmentPosition
 * Add or update home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.
**/
public class EmployeeDepartmentPosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeReason")
    public String changeReason;
    public EmployeeDepartmentPosition withChangeReason(String changeReason) {
        this.changeReason = changeReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clockBadgeNumber")
    public String clockBadgeNumber;
    public EmployeeDepartmentPosition withClockBadgeNumber(String clockBadgeNumber) {
        this.clockBadgeNumber = clockBadgeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter1")
    public String costCenter1;
    public EmployeeDepartmentPosition withCostCenter1(String costCenter1) {
        this.costCenter1 = costCenter1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter2")
    public String costCenter2;
    public EmployeeDepartmentPosition withCostCenter2(String costCenter2) {
        this.costCenter2 = costCenter2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter3")
    public String costCenter3;
    public EmployeeDepartmentPosition withCostCenter3(String costCenter3) {
        this.costCenter3 = costCenter3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public String effectiveDate;
    public EmployeeDepartmentPosition withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeeType")
    public String employeeType;
    public EmployeeDepartmentPosition withEmployeeType(String employeeType) {
        this.employeeType = employeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equalEmploymentOpportunityClass")
    public String equalEmploymentOpportunityClass;
    public EmployeeDepartmentPosition withEqualEmploymentOpportunityClass(String equalEmploymentOpportunityClass) {
        this.equalEmploymentOpportunityClass = equalEmploymentOpportunityClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isMinimumWageExempt")
    public Boolean isMinimumWageExempt;
    public EmployeeDepartmentPosition withIsMinimumWageExempt(Boolean isMinimumWageExempt) {
        this.isMinimumWageExempt = isMinimumWageExempt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isOvertimeExempt")
    public Boolean isOvertimeExempt;
    public EmployeeDepartmentPosition withIsOvertimeExempt(Boolean isOvertimeExempt) {
        this.isOvertimeExempt = isOvertimeExempt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSupervisorReviewer")
    public Boolean isSupervisorReviewer;
    public EmployeeDepartmentPosition withIsSupervisorReviewer(Boolean isSupervisorReviewer) {
        this.isSupervisorReviewer = isSupervisorReviewer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isUnionDuesCollected")
    public Boolean isUnionDuesCollected;
    public EmployeeDepartmentPosition withIsUnionDuesCollected(Boolean isUnionDuesCollected) {
        this.isUnionDuesCollected = isUnionDuesCollected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isUnionInitiationCollected")
    public Boolean isUnionInitiationCollected;
    public EmployeeDepartmentPosition withIsUnionInitiationCollected(Boolean isUnionInitiationCollected) {
        this.isUnionInitiationCollected = isUnionInitiationCollected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTitle")
    public String jobTitle;
    public EmployeeDepartmentPosition withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payGroup")
    public String payGroup;
    public EmployeeDepartmentPosition withPayGroup(String payGroup) {
        this.payGroup = payGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positionCode")
    public String positionCode;
    public EmployeeDepartmentPosition withPositionCode(String positionCode) {
        this.positionCode = positionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewerCompanyNumber")
    public String reviewerCompanyNumber;
    public EmployeeDepartmentPosition withReviewerCompanyNumber(String reviewerCompanyNumber) {
        this.reviewerCompanyNumber = reviewerCompanyNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewerEmployeeId")
    public String reviewerEmployeeId;
    public EmployeeDepartmentPosition withReviewerEmployeeId(String reviewerEmployeeId) {
        this.reviewerEmployeeId = reviewerEmployeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shift")
    public String shift;
    public EmployeeDepartmentPosition withShift(String shift) {
        this.shift = shift;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supervisorCompanyNumber")
    public String supervisorCompanyNumber;
    public EmployeeDepartmentPosition withSupervisorCompanyNumber(String supervisorCompanyNumber) {
        this.supervisorCompanyNumber = supervisorCompanyNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supervisorEmployeeId")
    public String supervisorEmployeeId;
    public EmployeeDepartmentPosition withSupervisorEmployeeId(String supervisorEmployeeId) {
        this.supervisorEmployeeId = supervisorEmployeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tipped")
    public String tipped;
    public EmployeeDepartmentPosition withTipped(String tipped) {
        this.tipped = tipped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unionAffiliationDate")
    public String unionAffiliationDate;
    public EmployeeDepartmentPosition withUnionAffiliationDate(String unionAffiliationDate) {
        this.unionAffiliationDate = unionAffiliationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unionCode")
    public String unionCode;
    public EmployeeDepartmentPosition withUnionCode(String unionCode) {
        this.unionCode = unionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unionPosition")
    public String unionPosition;
    public EmployeeDepartmentPosition withUnionPosition(String unionPosition) {
        this.unionPosition = unionPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workersCompensation")
    public String workersCompensation;
    public EmployeeDepartmentPosition withWorkersCompensation(String workersCompensation) {
        this.workersCompensation = workersCompensation;
        return this;
    }
}