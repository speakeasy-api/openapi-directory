package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChartHistogramRule
 * Allows you to organize numeric values in a source data column into buckets of constant size.
**/
public class ChartHistogramRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intervalSize")
    public Double intervalSize;
    public ChartHistogramRule withIntervalSize(Double intervalSize) {
        this.intervalSize = intervalSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public Double maxValue;
    public ChartHistogramRule withMaxValue(Double maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public Double minValue;
    public ChartHistogramRule withMinValue(Double minValue) {
        this.minValue = minValue;
        return this;
    }
}