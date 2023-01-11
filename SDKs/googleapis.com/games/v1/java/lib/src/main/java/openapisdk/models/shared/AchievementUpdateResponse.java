package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementUpdateResponse
 * An updated achievement.
**/
public class AchievementUpdateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("achievementId")
    public String achievementId;
    public AchievementUpdateResponse withAchievementId(String achievementId) {
        this.achievementId = achievementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentState")
    public AchievementUpdateResponseCurrentStateEnum currentState;
    public AchievementUpdateResponse withCurrentState(AchievementUpdateResponseCurrentStateEnum currentState) {
        this.currentState = currentState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentSteps")
    public Integer currentSteps;
    public AchievementUpdateResponse withCurrentSteps(Integer currentSteps) {
        this.currentSteps = currentSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementUpdateResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newlyUnlocked")
    public Boolean newlyUnlocked;
    public AchievementUpdateResponse withNewlyUnlocked(Boolean newlyUnlocked) {
        this.newlyUnlocked = newlyUnlocked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateOccurred")
    public Boolean updateOccurred;
    public AchievementUpdateResponse withUpdateOccurred(Boolean updateOccurred) {
        this.updateOccurred = updateOccurred;
        return this;
    }
}