package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportRow
 * A row of the returning report.
**/
public class ReportRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionValues")
    public java.util.Map<String, ReportRowDimensionValue> dimensionValues;
    public ReportRow withDimensionValues(java.util.Map<String, ReportRowDimensionValue> dimensionValues) {
        this.dimensionValues = dimensionValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricValues")
    public java.util.Map<String, ReportRowMetricValue> metricValues;
    public ReportRow withMetricValues(java.util.Map<String, ReportRowMetricValue> metricValues) {
        this.metricValues = metricValues;
        return this;
    }
}