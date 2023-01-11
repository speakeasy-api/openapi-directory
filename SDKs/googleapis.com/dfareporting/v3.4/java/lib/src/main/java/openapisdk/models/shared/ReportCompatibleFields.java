package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportCompatibleFields
 * Represents fields that are compatible to be selected for a report of type "STANDARD".
**/
public class ReportCompatibleFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilters")
    public Dimension[] dimensionFilters;
    public ReportCompatibleFields withDimensionFilters(Dimension[] dimensionFilters) {
        this.dimensionFilters = dimensionFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimension[] dimensions;
    public ReportCompatibleFields withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ReportCompatibleFields withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Metric[] metrics;
    public ReportCompatibleFields withMetrics(Metric[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pivotedActivityMetrics")
    public Metric[] pivotedActivityMetrics;
    public ReportCompatibleFields withPivotedActivityMetrics(Metric[] pivotedActivityMetrics) {
        this.pivotedActivityMetrics = pivotedActivityMetrics;
        return this;
    }
}