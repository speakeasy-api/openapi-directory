package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportRequestTimeRange
 * If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.
**/
public class ReportRequestTimeRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changedAttributesSinceTimestamp")
    public String changedAttributesSinceTimestamp;
    public ReportRequestTimeRange withChangedAttributesSinceTimestamp(String changedAttributesSinceTimestamp) {
        this.changedAttributesSinceTimestamp = changedAttributesSinceTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changedMetricsSinceTimestamp")
    public String changedMetricsSinceTimestamp;
    public ReportRequestTimeRange withChangedMetricsSinceTimestamp(String changedMetricsSinceTimestamp) {
        this.changedMetricsSinceTimestamp = changedMetricsSinceTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public ReportRequestTimeRange withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public ReportRequestTimeRange withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}