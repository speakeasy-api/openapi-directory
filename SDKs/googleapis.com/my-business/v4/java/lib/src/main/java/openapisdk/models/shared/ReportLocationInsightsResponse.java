package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportLocationInsightsResponse
 * Response message for `Insights.ReportLocationInsights`.
**/
public class ReportLocationInsightsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationDrivingDirectionMetrics")
    public LocationDrivingDirectionMetrics[] locationDrivingDirectionMetrics;
    public ReportLocationInsightsResponse withLocationDrivingDirectionMetrics(LocationDrivingDirectionMetrics[] locationDrivingDirectionMetrics) {
        this.locationDrivingDirectionMetrics = locationDrivingDirectionMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationMetrics")
    public LocationMetrics[] locationMetrics;
    public ReportLocationInsightsResponse withLocationMetrics(LocationMetrics[] locationMetrics) {
        this.locationMetrics = locationMetrics;
        return this;
    }
}