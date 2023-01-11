package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportLocationInsightsRequest
 * Request message for Insights.ReportLocationInsights.
**/
public class ReportLocationInsightsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicRequest")
    public BasicMetricsRequest basicRequest;
    public ReportLocationInsightsRequest withBasicRequest(BasicMetricsRequest basicRequest) {
        this.basicRequest = basicRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drivingDirectionsRequest")
    public DrivingDirectionMetricsRequest drivingDirectionsRequest;
    public ReportLocationInsightsRequest withDrivingDirectionsRequest(DrivingDirectionMetricsRequest drivingDirectionsRequest) {
        this.drivingDirectionsRequest = drivingDirectionsRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationNames")
    public String[] locationNames;
    public ReportLocationInsightsRequest withLocationNames(String[] locationNames) {
        this.locationNames = locationNames;
        return this;
    }
}