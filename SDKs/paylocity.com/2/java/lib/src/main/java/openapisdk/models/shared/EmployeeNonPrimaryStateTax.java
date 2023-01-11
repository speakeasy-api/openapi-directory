package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeNonPrimaryStateTax
 * Add or update non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.
**/
public class EmployeeNonPrimaryStateTax {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public EmployeeNonPrimaryStateTax withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deductionsAmount")
    public Double deductionsAmount;
    public EmployeeNonPrimaryStateTax withDeductionsAmount(Double deductionsAmount) {
        this.deductionsAmount = deductionsAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependentsAmount")
    public Double dependentsAmount;
    public EmployeeNonPrimaryStateTax withDependentsAmount(Double dependentsAmount) {
        this.dependentsAmount = dependentsAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptions")
    public Double exemptions;
    public EmployeeNonPrimaryStateTax withExemptions(Double exemptions) {
        this.exemptions = exemptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptions2")
    public Double exemptions2;
    public EmployeeNonPrimaryStateTax withExemptions2(Double exemptions2) {
        this.exemptions2 = exemptions2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filingStatus")
    public String filingStatus;
    public EmployeeNonPrimaryStateTax withFilingStatus(String filingStatus) {
        this.filingStatus = filingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("higherRate")
    public Boolean higherRate;
    public EmployeeNonPrimaryStateTax withHigherRate(Boolean higherRate) {
        this.higherRate = higherRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherIncomeAmount")
    public Double otherIncomeAmount;
    public EmployeeNonPrimaryStateTax withOtherIncomeAmount(Double otherIncomeAmount) {
        this.otherIncomeAmount = otherIncomeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public Double percentage;
    public EmployeeNonPrimaryStateTax withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reciprocityCode")
    public String reciprocityCode;
    public EmployeeNonPrimaryStateTax withReciprocityCode(String reciprocityCode) {
        this.reciprocityCode = reciprocityCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialCheckCalc")
    public String specialCheckCalc;
    public EmployeeNonPrimaryStateTax withSpecialCheckCalc(String specialCheckCalc) {
        this.specialCheckCalc = specialCheckCalc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCalculationCode")
    public String taxCalculationCode;
    public EmployeeNonPrimaryStateTax withTaxCalculationCode(String taxCalculationCode) {
        this.taxCalculationCode = taxCalculationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCode")
    public String taxCode;
    public EmployeeNonPrimaryStateTax withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("w4FormYear")
    public Long w4FormYear;
    public EmployeeNonPrimaryStateTax withW4FormYear(Long w4FormYear) {
        this.w4FormYear = w4FormYear;
        return this;
    }
}