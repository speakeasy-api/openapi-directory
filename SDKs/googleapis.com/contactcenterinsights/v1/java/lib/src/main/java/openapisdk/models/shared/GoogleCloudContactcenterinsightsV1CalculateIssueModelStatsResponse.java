package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse
 * Response of querying an issue model's statistics.
**/
public class GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentStats")
    public GoogleCloudContactcenterinsightsV1IssueModelLabelStats currentStats;
    public GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse withCurrentStats(GoogleCloudContactcenterinsightsV1IssueModelLabelStats currentStats) {
        this.currentStats = currentStats;
        return this;
    }
}