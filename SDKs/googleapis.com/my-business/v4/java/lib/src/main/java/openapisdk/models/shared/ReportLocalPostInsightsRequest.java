package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportLocalPostInsightsRequest
 * Request message for Insights.ReportLocalPostInsights
**/
public class ReportLocalPostInsightsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicRequest")
    public BasicMetricsRequest basicRequest;
    public ReportLocalPostInsightsRequest withBasicRequest(BasicMetricsRequest basicRequest) {
        this.basicRequest = basicRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localPostNames")
    public String[] localPostNames;
    public ReportLocalPostInsightsRequest withLocalPostNames(String[] localPostNames) {
        this.localPostNames = localPostNames;
        return this;
    }
}