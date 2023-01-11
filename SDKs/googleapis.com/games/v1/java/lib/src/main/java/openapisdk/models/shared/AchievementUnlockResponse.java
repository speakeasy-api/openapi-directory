package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementUnlockResponse
 * An achievement unlock response
**/
public class AchievementUnlockResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementUnlockResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newlyUnlocked")
    public Boolean newlyUnlocked;
    public AchievementUnlockResponse withNewlyUnlocked(Boolean newlyUnlocked) {
        this.newlyUnlocked = newlyUnlocked;
        return this;
    }
}