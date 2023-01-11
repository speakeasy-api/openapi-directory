package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeePrimaryStateTax
 * Add or update primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed. Sending an updated primary state will replace the current primary state.
**/
public class EmployeePrimaryStateTax {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public EmployeePrimaryStateTax withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deductionsAmount")
    public Double deductionsAmount;
    public EmployeePrimaryStateTax withDeductionsAmount(Double deductionsAmount) {
        this.deductionsAmount = deductionsAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependentsAmount")
    public Double dependentsAmount;
    public EmployeePrimaryStateTax withDependentsAmount(Double dependentsAmount) {
        this.dependentsAmount = dependentsAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptions")
    public Double exemptions;
    public EmployeePrimaryStateTax withExemptions(Double exemptions) {
        this.exemptions = exemptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptions2")
    public Double exemptions2;
    public EmployeePrimaryStateTax withExemptions2(Double exemptions2) {
        this.exemptions2 = exemptions2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filingStatus")
    public String filingStatus;
    public EmployeePrimaryStateTax withFilingStatus(String filingStatus) {
        this.filingStatus = filingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("higherRate")
    public Boolean higherRate;
    public EmployeePrimaryStateTax withHigherRate(Boolean higherRate) {
        this.higherRate = higherRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherIncomeAmount")
    public Double otherIncomeAmount;
    public EmployeePrimaryStateTax withOtherIncomeAmount(Double otherIncomeAmount) {
        this.otherIncomeAmount = otherIncomeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Double percentage;
    public EmployeePrimaryStateTax withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialCheckCalc")
    public String specialCheckCalc;
    public EmployeePrimaryStateTax withSpecialCheckCalc(String specialCheckCalc) {
        this.specialCheckCalc = specialCheckCalc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCalculationCode")
    public String taxCalculationCode;
    public EmployeePrimaryStateTax withTaxCalculationCode(String taxCalculationCode) {
        this.taxCalculationCode = taxCalculationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCode")
    public String taxCode;
    public EmployeePrimaryStateTax withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("w4FormYear")
    public Long w4FormYear;
    public EmployeePrimaryStateTax withW4FormYear(Long w4FormYear) {
        this.w4FormYear = w4FormYear;
        return this;
    }
}