package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StagedEmployeeNonPrimaryStateTax
 * The Non-Primary State Tax model
**/
public class StagedEmployeeNonPrimaryStateTax {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public StagedEmployeeNonPrimaryStateTax withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deductionsAmount")
    public Double deductionsAmount;
    public StagedEmployeeNonPrimaryStateTax withDeductionsAmount(Double deductionsAmount) {
        this.deductionsAmount = deductionsAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependentsAmount")
    public Double dependentsAmount;
    public StagedEmployeeNonPrimaryStateTax withDependentsAmount(Double dependentsAmount) {
        this.dependentsAmount = dependentsAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptions")
    public Double exemptions;
    public StagedEmployeeNonPrimaryStateTax withExemptions(Double exemptions) {
        this.exemptions = exemptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptions2")
    public Double exemptions2;
    public StagedEmployeeNonPrimaryStateTax withExemptions2(Double exemptions2) {
        this.exemptions2 = exemptions2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filingStatus")
    public String filingStatus;
    public StagedEmployeeNonPrimaryStateTax withFilingStatus(String filingStatus) {
        this.filingStatus = filingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("higherRate")
    public Boolean higherRate;
    public StagedEmployeeNonPrimaryStateTax withHigherRate(Boolean higherRate) {
        this.higherRate = higherRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherIncomeAmount")
    public Double otherIncomeAmount;
    public StagedEmployeeNonPrimaryStateTax withOtherIncomeAmount(Double otherIncomeAmount) {
        this.otherIncomeAmount = otherIncomeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Double percentage;
    public StagedEmployeeNonPrimaryStateTax withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reciprocityCode")
    public String reciprocityCode;
    public StagedEmployeeNonPrimaryStateTax withReciprocityCode(String reciprocityCode) {
        this.reciprocityCode = reciprocityCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialCheckCalc")
    public String specialCheckCalc;
    public StagedEmployeeNonPrimaryStateTax withSpecialCheckCalc(String specialCheckCalc) {
        this.specialCheckCalc = specialCheckCalc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCalculationCode")
    public String taxCalculationCode;
    public StagedEmployeeNonPrimaryStateTax withTaxCalculationCode(String taxCalculationCode) {
        this.taxCalculationCode = taxCalculationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCode")
    public String taxCode;
    public StagedEmployeeNonPrimaryStateTax withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("w4FormYear")
    public Long w4FormYear;
    public StagedEmployeeNonPrimaryStateTax withW4FormYear(Long w4FormYear) {
        this.w4FormYear = w4FormYear;
        return this;
    }
}