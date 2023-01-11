package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Male {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("average")
    public Long average;
    public Male withAverage(Long average) {
        this.average = average;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiplicity")
    public Long multiplicity;
    public Male withMultiplicity(Long multiplicity) {
        this.multiplicity = multiplicity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentile")
    public Long percentile;
    public Male withPercentile(Long percentile) {
        this.percentile = percentile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistical_info")
    public StatisticalInfoM statisticalInfo;
    public Male withStatisticalInfo(StatisticalInfoM statisticalInfo) {
        this.statisticalInfo = statisticalInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stdev")
    public Long stdev;
    public Male withStdev(Long stdev) {
        this.stdev = stdev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Long value;
    public Male withValue(Long value) {
        this.value = value;
        return this;
    }
}