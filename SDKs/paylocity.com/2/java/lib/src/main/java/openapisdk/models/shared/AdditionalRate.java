package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdditionalRate
 * The additional pay rate model
**/
public class AdditionalRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeReason")
    public String changeReason;
    public AdditionalRate withChangeReason(String changeReason) {
        this.changeReason = changeReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter1")
    public String costCenter1;
    public AdditionalRate withCostCenter1(String costCenter1) {
        this.costCenter1 = costCenter1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter2")
    public String costCenter2;
    public AdditionalRate withCostCenter2(String costCenter2) {
        this.costCenter2 = costCenter2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter3")
    public String costCenter3;
    public AdditionalRate withCostCenter3(String costCenter3) {
        this.costCenter3 = costCenter3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public String effectiveDate;
    public AdditionalRate withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endCheckDate")
    public String endCheckDate;
    public AdditionalRate withEndCheckDate(String endCheckDate) {
        this.endCheckDate = endCheckDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public String job;
    public AdditionalRate withJob(String job) {
        this.job = job;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Double rate;
    public AdditionalRate withRate(Double rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateCode")
    public String rateCode;
    public AdditionalRate withRateCode(String rateCode) {
        this.rateCode = rateCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateNotes")
    public String rateNotes;
    public AdditionalRate withRateNotes(String rateNotes) {
        this.rateNotes = rateNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePer")
    public String ratePer;
    public AdditionalRate withRatePer(String ratePer) {
        this.ratePer = ratePer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shift")
    public String shift;
    public AdditionalRate withShift(String shift) {
        this.shift = shift;
        return this;
    }
}