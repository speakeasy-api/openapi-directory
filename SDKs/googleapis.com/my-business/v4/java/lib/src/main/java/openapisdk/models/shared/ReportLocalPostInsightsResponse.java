package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportLocalPostInsightsResponse
 * Response message for Insights.ReportLocalPostInsights
**/
public class ReportLocalPostInsightsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localPostMetrics")
    public LocalPostMetrics[] localPostMetrics;
    public ReportLocalPostInsightsResponse withLocalPostMetrics(LocalPostMetrics[] localPostMetrics) {
        this.localPostMetrics = localPostMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReportLocalPostInsightsResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public ReportLocalPostInsightsResponse withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}