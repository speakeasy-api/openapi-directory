package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FloodlightReportCompatibleFields
 * Represents fields that are compatible to be selected for a report of type "FlOODLIGHT".
**/
public class FloodlightReportCompatibleFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionFilters")
    public Dimension[] dimensionFilters;
    public FloodlightReportCompatibleFields withDimensionFilters(Dimension[] dimensionFilters) {
        this.dimensionFilters = dimensionFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimension[] dimensions;
    public FloodlightReportCompatibleFields withDimensions(Dimension[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FloodlightReportCompatibleFields withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Metric[] metrics;
    public FloodlightReportCompatibleFields withMetrics(Metric[] metrics) {
        this.metrics = metrics;
        return this;
    }
}