package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Earning
 * The employee earning model
**/
public class Earning {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agency")
    public String agency;
    public Earning withAgency(String agency) {
        this.agency = agency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public Earning withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annualMaximum")
    public Double annualMaximum;
    public Earning withAnnualMaximum(Double annualMaximum) {
        this.annualMaximum = annualMaximum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calculationCode")
    public String calculationCode;
    public Earning withCalculationCode(String calculationCode) {
        this.calculationCode = calculationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter1")
    public String costCenter1;
    public Earning withCostCenter1(String costCenter1) {
        this.costCenter1 = costCenter1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter2")
    public String costCenter2;
    public Earning withCostCenter2(String costCenter2) {
        this.costCenter2 = costCenter2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter3")
    public String costCenter3;
    public Earning withCostCenter3(String costCenter3) {
        this.costCenter3 = costCenter3;
        return this;
    }
    @JsonProperty("earningCode")
    public String earningCode;
    public Earning withEarningCode(String earningCode) {
        this.earningCode = earningCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public String effectiveDate;
    public Earning withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public Earning withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public String frequency;
    public Earning withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goal")
    public Double goal;
    public Earning withGoal(Double goal) {
        this.goal = goal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hoursOrUnits")
    public Double hoursOrUnits;
    public Earning withHoursOrUnits(Double hoursOrUnits) {
        this.hoursOrUnits = hoursOrUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSelfInsured")
    public Boolean isSelfInsured;
    public Earning withIsSelfInsured(Boolean isSelfInsured) {
        this.isSelfInsured = isSelfInsured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobCode")
    public String jobCode;
    public Earning withJobCode(String jobCode) {
        this.jobCode = jobCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miscellaneousInfo")
    public String miscellaneousInfo;
    public Earning withMiscellaneousInfo(String miscellaneousInfo) {
        this.miscellaneousInfo = miscellaneousInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paidTowardsGoal")
    public Double paidTowardsGoal;
    public Earning withPaidTowardsGoal(Double paidTowardsGoal) {
        this.paidTowardsGoal = paidTowardsGoal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payPeriodMaximum")
    public Double payPeriodMaximum;
    public Earning withPayPeriodMaximum(Double payPeriodMaximum) {
        this.payPeriodMaximum = payPeriodMaximum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payPeriodMinimum")
    public Double payPeriodMinimum;
    public Earning withPayPeriodMinimum(Double payPeriodMinimum) {
        this.payPeriodMinimum = payPeriodMinimum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Double rate;
    public Earning withRate(Double rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateCode")
    public String rateCode;
    public Earning withRateCode(String rateCode) {
        this.rateCode = rateCode;
        return this;
    }
    @JsonProperty("startDate")
    public String startDate;
    public Earning withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}