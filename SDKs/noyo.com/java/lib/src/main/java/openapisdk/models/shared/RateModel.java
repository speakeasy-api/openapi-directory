package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RateModel {
    @JsonProperty("amount")
    public Double amount;
    public RateModel withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("coverage_level")
    public RateModelCoverageLevelEnum coverageLevel;
    public RateModel withCoverageLevel(RateModelCoverageLevelEnum coverageLevel) {
        this.coverageLevel = coverageLevel;
        return this;
    }
    @JsonProperty("period")
    public TimePeriod period;
    public RateModel withPeriod(TimePeriod period) {
        this.period = period;
        return this;
    }
}