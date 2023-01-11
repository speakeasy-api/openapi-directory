package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReachReportCompatibleFields
 * Represents fields that are compatible to be selected for a report of type "REACH".
**/
public class ReachReportCompatibleFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilters")
    public Dimension[] dimensionFilters;
    public ReachReportCompatibleFields withDimensionFilters(Dimension[] dimensionFilters) {
        this.dimensionFilters = dimensionFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimension[] dimensions;
    public ReachReportCompatibleFields withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ReachReportCompatibleFields withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Metric[] metrics;
    public ReachReportCompatibleFields withMetrics(Metric[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pivotedActivityMetrics")
    public Metric[] pivotedActivityMetrics;
    public ReachReportCompatibleFields withPivotedActivityMetrics(Metric[] pivotedActivityMetrics) {
        this.pivotedActivityMetrics = pivotedActivityMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachByFrequencyMetrics")
    public Metric[] reachByFrequencyMetrics;
    public ReachReportCompatibleFields withReachByFrequencyMetrics(Metric[] reachByFrequencyMetrics) {
        this.reachByFrequencyMetrics = reachByFrequencyMetrics;
        return this;
    }
}