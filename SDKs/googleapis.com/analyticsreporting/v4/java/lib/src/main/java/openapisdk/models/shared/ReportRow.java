package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportRow
 * A row in the report.
**/
public class ReportRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public String[] dimensions;
    public ReportRow withDimensions(String[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public DateRangeValues[] metrics;
    public ReportRow withMetrics(DateRangeValues[] metrics) {
        this.metrics = metrics;
        return this;
    }
}