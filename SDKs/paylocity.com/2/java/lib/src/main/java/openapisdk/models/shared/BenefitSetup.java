package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BenefitSetup
 * The benefit setup model
**/
public class BenefitSetup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefitClass")
    public String benefitClass;
    public BenefitSetup withBenefitClass(String benefitClass) {
        this.benefitClass = benefitClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefitClassEffectiveDate")
    public String benefitClassEffectiveDate;
    public BenefitSetup withBenefitClassEffectiveDate(String benefitClassEffectiveDate) {
        this.benefitClassEffectiveDate = benefitClassEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefitSalary")
    public Double benefitSalary;
    public BenefitSetup withBenefitSalary(Double benefitSalary) {
        this.benefitSalary = benefitSalary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefitSalaryEffectiveDate")
    public String benefitSalaryEffectiveDate;
    public BenefitSetup withBenefitSalaryEffectiveDate(String benefitSalaryEffectiveDate) {
        this.benefitSalaryEffectiveDate = benefitSalaryEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doNotApplyAdministrativePeriod")
    public Boolean doNotApplyAdministrativePeriod;
    public BenefitSetup withDoNotApplyAdministrativePeriod(Boolean doNotApplyAdministrativePeriod) {
        this.doNotApplyAdministrativePeriod = doNotApplyAdministrativePeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isMeasureAcaEligibility")
    public Boolean isMeasureAcaEligibility;
    public BenefitSetup withIsMeasureAcaEligibility(Boolean isMeasureAcaEligibility) {
        this.isMeasureAcaEligibility = isMeasureAcaEligibility;
        return this;
    }
}