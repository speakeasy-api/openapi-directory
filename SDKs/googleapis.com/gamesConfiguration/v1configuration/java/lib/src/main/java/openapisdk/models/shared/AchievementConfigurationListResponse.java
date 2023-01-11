package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementConfigurationListResponse
 * A ListConfigurations response.
**/
public class AchievementConfigurationListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public AchievementConfiguration[] items;
    public AchievementConfigurationListResponse withItems(AchievementConfiguration[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementConfigurationListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public AchievementConfigurationListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}