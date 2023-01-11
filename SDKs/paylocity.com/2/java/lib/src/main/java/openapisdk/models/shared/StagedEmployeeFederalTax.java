package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StagedEmployeeFederalTax
 * The Federal Tax model
**/
public class StagedEmployeeFederalTax {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public StagedEmployeeFederalTax withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deductionsAmount")
    public Double deductionsAmount;
    public StagedEmployeeFederalTax withDeductionsAmount(Double deductionsAmount) {
        this.deductionsAmount = deductionsAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependentsAmount")
    public Double dependentsAmount;
    public StagedEmployeeFederalTax withDependentsAmount(Double dependentsAmount) {
        this.dependentsAmount = dependentsAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptions")
    public Double exemptions;
    public StagedEmployeeFederalTax withExemptions(Double exemptions) {
        this.exemptions = exemptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filingStatus")
    public String filingStatus;
    public StagedEmployeeFederalTax withFilingStatus(String filingStatus) {
        this.filingStatus = filingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("higherRate")
    public Boolean higherRate;
    public StagedEmployeeFederalTax withHigherRate(Boolean higherRate) {
        this.higherRate = higherRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherIncomeAmount")
    public Double otherIncomeAmount;
    public StagedEmployeeFederalTax withOtherIncomeAmount(Double otherIncomeAmount) {
        this.otherIncomeAmount = otherIncomeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Double percentage;
    public StagedEmployeeFederalTax withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCalculationCode")
    public String taxCalculationCode;
    public StagedEmployeeFederalTax withTaxCalculationCode(String taxCalculationCode) {
        this.taxCalculationCode = taxCalculationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("w4FormYear")
    public Long w4FormYear;
    public StagedEmployeeFederalTax withW4FormYear(Long w4FormYear) {
        this.w4FormYear = w4FormYear;
        return this;
    }
}