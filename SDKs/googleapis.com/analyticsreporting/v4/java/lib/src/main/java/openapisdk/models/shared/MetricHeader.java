package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricHeader
 * The headers for the metrics.
**/
public class MetricHeader {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricHeaderEntries")
    public MetricHeaderEntry[] metricHeaderEntries;
    public MetricHeader withMetricHeaderEntries(MetricHeaderEntry[] metricHeaderEntries) {
        this.metricHeaderEntries = metricHeaderEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pivotHeaders")
    public PivotHeader[] pivotHeaders;
    public MetricHeader withPivotHeaders(PivotHeader[] pivotHeaders) {
        this.pivotHeaders = pivotHeaders;
        return this;
    }
}