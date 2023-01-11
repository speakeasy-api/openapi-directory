package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RunQueryRequest
 * Request to run a stored query to generate a report.
**/
public class RunQueryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataRange")
    public RunQueryRequestDataRangeEnum dataRange;
    public RunQueryRequest withDataRange(RunQueryRequestDataRangeEnum dataRange) {
        this.dataRange = dataRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportDataEndTimeMs")
    public String reportDataEndTimeMs;
    public RunQueryRequest withReportDataEndTimeMs(String reportDataEndTimeMs) {
        this.reportDataEndTimeMs = reportDataEndTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportDataStartTimeMs")
    public String reportDataStartTimeMs;
    public RunQueryRequest withReportDataStartTimeMs(String reportDataStartTimeMs) {
        this.reportDataStartTimeMs = reportDataStartTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezoneCode")
    public String timezoneCode;
    public RunQueryRequest withTimezoneCode(String timezoneCode) {
        this.timezoneCode = timezoneCode;
        return this;
    }
}