package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PerformanceReportList
 * The configuration data for an Ad Exchange performance report list.
**/
public class PerformanceReportList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PerformanceReportList withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performanceReport")
    public PerformanceReport[] performanceReport;
    public PerformanceReportList withPerformanceReport(PerformanceReport[] performanceReport) {
        this.performanceReport = performanceReport;
        return this;
    }
}