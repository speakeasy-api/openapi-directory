package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiUsageAggregatedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colHeaders")
    public String[] colHeaders;
    public ApiUsageAggregatedOut withColHeaders(String[] colHeaders) {
        this.colHeaders = colHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Integer[][] data;
    public ApiUsageAggregatedOut withData(Integer[][] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("historyTruncated")
    public Boolean historyTruncated;
    public ApiUsageAggregatedOut withHistoryTruncated(Boolean historyTruncated) {
        this.historyTruncated = historyTruncated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodEnd")
    public Long periodEnd;
    public ApiUsageAggregatedOut withPeriodEnd(Long periodEnd) {
        this.periodEnd = periodEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodStart")
    public Long periodStart;
    public ApiUsageAggregatedOut withPeriodStart(Long periodStart) {
        this.periodStart = periodStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowHeaders")
    public String[] rowHeaders;
    public ApiUsageAggregatedOut withRowHeaders(String[] rowHeaders) {
        this.rowHeaders = rowHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeUnit")
    public String timeUnit;
    public ApiUsageAggregatedOut withTimeUnit(String timeUnit) {
        this.timeUnit = timeUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalUsage")
    public Long totalUsage;
    public ApiUsageAggregatedOut withTotalUsage(Long totalUsage) {
        this.totalUsage = totalUsage;
        return this;
    }
}