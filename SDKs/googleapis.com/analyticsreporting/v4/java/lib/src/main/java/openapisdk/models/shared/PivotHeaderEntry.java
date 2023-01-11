package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PivotHeaderEntry
 * The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response.
**/
public class PivotHeaderEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionNames")
    public String[] dimensionNames;
    public PivotHeaderEntry withDimensionNames(String[] dimensionNames) {
        this.dimensionNames = dimensionNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionValues")
    public String[] dimensionValues;
    public PivotHeaderEntry withDimensionValues(String[] dimensionValues) {
        this.dimensionValues = dimensionValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metric")
    public MetricHeaderEntry metric;
    public PivotHeaderEntry withMetric(MetricHeaderEntry metric) {
        this.metric = metric;
        return this;
    }
}