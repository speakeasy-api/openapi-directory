package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementDefinitionsListResponse
 * A list of achievement definition objects.
**/
public class AchievementDefinitionsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public AchievementDefinition[] items;
    public AchievementDefinitionsListResponse withItems(AchievementDefinition[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementDefinitionsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public AchievementDefinitionsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}