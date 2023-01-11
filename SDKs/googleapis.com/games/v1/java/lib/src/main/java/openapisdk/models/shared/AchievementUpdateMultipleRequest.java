package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementUpdateMultipleRequest
 * A list of achievement update requests.
**/
public class AchievementUpdateMultipleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementUpdateMultipleRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updates")
    public AchievementUpdateRequest[] updates;
    public AchievementUpdateMultipleRequest withUpdates(AchievementUpdateRequest[] updates) {
        this.updates = updates;
        return this;
    }
}