package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LeaderboardConfigurationListResponse
 * A ListConfigurations response.
**/
public class LeaderboardConfigurationListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public LeaderboardConfiguration[] items;
    public LeaderboardConfigurationListResponse withItems(LeaderboardConfiguration[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LeaderboardConfigurationListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public LeaderboardConfigurationListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}