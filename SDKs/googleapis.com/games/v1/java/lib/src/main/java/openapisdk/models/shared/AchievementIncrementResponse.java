package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementIncrementResponse
 * An achievement increment response
**/
public class AchievementIncrementResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentSteps")
    public Integer currentSteps;
    public AchievementIncrementResponse withCurrentSteps(Integer currentSteps) {
        this.currentSteps = currentSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementIncrementResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newlyUnlocked")
    public Boolean newlyUnlocked;
    public AchievementIncrementResponse withNewlyUnlocked(Boolean newlyUnlocked) {
        this.newlyUnlocked = newlyUnlocked;
        return this;
    }
}