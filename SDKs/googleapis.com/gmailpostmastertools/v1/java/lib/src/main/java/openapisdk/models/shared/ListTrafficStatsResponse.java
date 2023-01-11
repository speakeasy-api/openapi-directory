package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTrafficStatsResponse
 * Response message for ListTrafficStats.
**/
public class ListTrafficStatsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTrafficStatsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficStats")
    public TrafficStats[] trafficStats;
    public ListTrafficStatsResponse withTrafficStats(TrafficStats[] trafficStats) {
        this.trafficStats = trafficStats;
        return this;
    }
}