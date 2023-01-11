package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeBenefitSetup
 *  Add or update setup values used for employee benefits integration, insurance plan settings, and ACA reporting.
**/
public class EmployeeBenefitSetup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefitClass")
    public String benefitClass;
    public EmployeeBenefitSetup withBenefitClass(String benefitClass) {
        this.benefitClass = benefitClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefitClassEffectiveDate")
    public String benefitClassEffectiveDate;
    public EmployeeBenefitSetup withBenefitClassEffectiveDate(String benefitClassEffectiveDate) {
        this.benefitClassEffectiveDate = benefitClassEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefitSalary")
    public Double benefitSalary;
    public EmployeeBenefitSetup withBenefitSalary(Double benefitSalary) {
        this.benefitSalary = benefitSalary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefitSalaryEffectiveDate")
    public String benefitSalaryEffectiveDate;
    public EmployeeBenefitSetup withBenefitSalaryEffectiveDate(String benefitSalaryEffectiveDate) {
        this.benefitSalaryEffectiveDate = benefitSalaryEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doNotApplyAdministrativePeriod")
    public Boolean doNotApplyAdministrativePeriod;
    public EmployeeBenefitSetup withDoNotApplyAdministrativePeriod(Boolean doNotApplyAdministrativePeriod) {
        this.doNotApplyAdministrativePeriod = doNotApplyAdministrativePeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isMeasureAcaEligibility")
    public Boolean isMeasureAcaEligibility;
    public EmployeeBenefitSetup withIsMeasureAcaEligibility(Boolean isMeasureAcaEligibility) {
        this.isMeasureAcaEligibility = isMeasureAcaEligibility;
        return this;
    }
}