package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementSetStepsAtLeastResponse
 * An achievement set steps at least response.
**/
public class AchievementSetStepsAtLeastResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentSteps")
    public Integer currentSteps;
    public AchievementSetStepsAtLeastResponse withCurrentSteps(Integer currentSteps) {
        this.currentSteps = currentSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementSetStepsAtLeastResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newlyUnlocked")
    public Boolean newlyUnlocked;
    public AchievementSetStepsAtLeastResponse withNewlyUnlocked(Boolean newlyUnlocked) {
        this.newlyUnlocked = newlyUnlocked;
        return this;
    }
}