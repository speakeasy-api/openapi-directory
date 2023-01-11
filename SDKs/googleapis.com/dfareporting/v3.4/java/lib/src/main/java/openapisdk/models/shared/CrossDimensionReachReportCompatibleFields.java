package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CrossDimensionReachReportCompatibleFields
 * Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
**/
public class CrossDimensionReachReportCompatibleFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakdown")
    public Dimension[] breakdown;
    public CrossDimensionReachReportCompatibleFields withBreakdown(Dimension[] breakdown) {
        this.breakdown = breakdown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilters")
    public Dimension[] dimensionFilters;
    public CrossDimensionReachReportCompatibleFields withDimensionFilters(Dimension[] dimensionFilters) {
        this.dimensionFilters = dimensionFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CrossDimensionReachReportCompatibleFields withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Metric[] metrics;
    public CrossDimensionReachReportCompatibleFields withMetrics(Metric[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overlapMetrics")
    public Metric[] overlapMetrics;
    public CrossDimensionReachReportCompatibleFields withOverlapMetrics(Metric[] overlapMetrics) {
        this.overlapMetrics = overlapMetrics;
        return this;
    }
}