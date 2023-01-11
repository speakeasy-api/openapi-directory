package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeAdditionalRate
 * The additional pay rate model
**/
public class EmployeeAdditionalRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeReason")
    public String changeReason;
    public EmployeeAdditionalRate withChangeReason(String changeReason) {
        this.changeReason = changeReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter1")
    public String costCenter1;
    public EmployeeAdditionalRate withCostCenter1(String costCenter1) {
        this.costCenter1 = costCenter1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter2")
    public String costCenter2;
    public EmployeeAdditionalRate withCostCenter2(String costCenter2) {
        this.costCenter2 = costCenter2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter3")
    public String costCenter3;
    public EmployeeAdditionalRate withCostCenter3(String costCenter3) {
        this.costCenter3 = costCenter3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public String effectiveDate;
    public EmployeeAdditionalRate withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endCheckDate")
    public String endCheckDate;
    public EmployeeAdditionalRate withEndCheckDate(String endCheckDate) {
        this.endCheckDate = endCheckDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public String job;
    public EmployeeAdditionalRate withJob(String job) {
        this.job = job;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Double rate;
    public EmployeeAdditionalRate withRate(Double rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateCode")
    public String rateCode;
    public EmployeeAdditionalRate withRateCode(String rateCode) {
        this.rateCode = rateCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateNotes")
    public String rateNotes;
    public EmployeeAdditionalRate withRateNotes(String rateNotes) {
        this.rateNotes = rateNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePer")
    public String ratePer;
    public EmployeeAdditionalRate withRatePer(String ratePer) {
        this.ratePer = ratePer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shift")
    public String shift;
    public EmployeeAdditionalRate withShift(String shift) {
        this.shift = shift;
        return this;
    }
}