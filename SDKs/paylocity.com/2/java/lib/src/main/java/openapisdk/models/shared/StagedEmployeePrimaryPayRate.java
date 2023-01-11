package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StagedEmployeePrimaryPayRate
 * The Primary Pay Rate model
**/
public class StagedEmployeePrimaryPayRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseRate")
    public Double baseRate;
    public StagedEmployeePrimaryPayRate withBaseRate(Double baseRate) {
        this.baseRate = baseRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeReason")
    public String changeReason;
    public StagedEmployeePrimaryPayRate withChangeReason(String changeReason) {
        this.changeReason = changeReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultHours")
    public Double defaultHours;
    public StagedEmployeePrimaryPayRate withDefaultHours(Double defaultHours) {
        this.defaultHours = defaultHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public String effectiveDate;
    public StagedEmployeePrimaryPayRate withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAutoPay")
    public Boolean isAutoPay;
    public StagedEmployeePrimaryPayRate withIsAutoPay(Boolean isAutoPay) {
        this.isAutoPay = isAutoPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payFrequency")
    public String payFrequency;
    public StagedEmployeePrimaryPayRate withPayFrequency(String payFrequency) {
        this.payFrequency = payFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payGrade")
    public String payGrade;
    public StagedEmployeePrimaryPayRate withPayGrade(String payGrade) {
        this.payGrade = payGrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payType")
    public String payType;
    public StagedEmployeePrimaryPayRate withPayType(String payType) {
        this.payType = payType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePer")
    public String ratePer;
    public StagedEmployeePrimaryPayRate withRatePer(String ratePer) {
        this.ratePer = ratePer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salary")
    public Double salary;
    public StagedEmployeePrimaryPayRate withSalary(Double salary) {
        this.salary = salary;
        return this;
    }
}