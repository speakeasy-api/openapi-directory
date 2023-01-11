package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeePrimaryPayRate
 * Add or update hourly or salary pay rate, effective date, and pay frequency.
**/
public class EmployeePrimaryPayRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annualSalary")
    public Double annualSalary;
    public EmployeePrimaryPayRate withAnnualSalary(Double annualSalary) {
        this.annualSalary = annualSalary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseRate")
    public Double baseRate;
    public EmployeePrimaryPayRate withBaseRate(Double baseRate) {
        this.baseRate = baseRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beginCheckDate")
    public String beginCheckDate;
    public EmployeePrimaryPayRate withBeginCheckDate(String beginCheckDate) {
        this.beginCheckDate = beginCheckDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeReason")
    public String changeReason;
    public EmployeePrimaryPayRate withChangeReason(String changeReason) {
        this.changeReason = changeReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultHours")
    public Double defaultHours;
    public EmployeePrimaryPayRate withDefaultHours(Double defaultHours) {
        this.defaultHours = defaultHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public String effectiveDate;
    public EmployeePrimaryPayRate withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAutoPay")
    public Boolean isAutoPay;
    public EmployeePrimaryPayRate withIsAutoPay(Boolean isAutoPay) {
        this.isAutoPay = isAutoPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payFrequency")
    public String payFrequency;
    public EmployeePrimaryPayRate withPayFrequency(String payFrequency) {
        this.payFrequency = payFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payGrade")
    public String payGrade;
    public EmployeePrimaryPayRate withPayGrade(String payGrade) {
        this.payGrade = payGrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payRateNote")
    public String payRateNote;
    public EmployeePrimaryPayRate withPayRateNote(String payRateNote) {
        this.payRateNote = payRateNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payType")
    public String payType;
    public EmployeePrimaryPayRate withPayType(String payType) {
        this.payType = payType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePer")
    public String ratePer;
    public EmployeePrimaryPayRate withRatePer(String ratePer) {
        this.ratePer = ratePer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salary")
    public Double salary;
    public EmployeePrimaryPayRate withSalary(Double salary) {
        this.salary = salary;
        return this;
    }
}