package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ColumnHeader
 * Column headers.
**/
public class ColumnHeader {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public String[] dimensions;
    public ColumnHeader withDimensions(String[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricHeader")
    public MetricHeader metricHeader;
    public ColumnHeader withMetricHeader(MetricHeader metricHeader) {
        this.metricHeader = metricHeader;
        return this;
    }
}