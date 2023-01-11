package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Eighteen24 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("average")
    public Long average;
    public Eighteen24 withAverage(Long average) {
        this.average = average;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiplicity")
    public Long multiplicity;
    public Eighteen24 withMultiplicity(Long multiplicity) {
        this.multiplicity = multiplicity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentile")
    public Long percentile;
    public Eighteen24 withPercentile(Long percentile) {
        this.percentile = percentile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistical_info")
    public StatisticalInfo18 statisticalInfo;
    public Eighteen24 withStatisticalInfo(StatisticalInfo18 statisticalInfo) {
        this.statisticalInfo = statisticalInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stdev")
    public Long stdev;
    public Eighteen24 withStdev(Long stdev) {
        this.stdev = stdev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Long value;
    public Eighteen24 withValue(Long value) {
        this.value = value;
        return this;
    }
}