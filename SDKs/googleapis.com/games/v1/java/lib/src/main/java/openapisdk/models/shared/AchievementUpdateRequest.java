package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementUpdateRequest
 * A request to update an achievement.
**/
public class AchievementUpdateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("achievementId")
    public String achievementId;
    public AchievementUpdateRequest withAchievementId(String achievementId) {
        this.achievementId = achievementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incrementPayload")
    public GamesAchievementIncrement incrementPayload;
    public AchievementUpdateRequest withIncrementPayload(GamesAchievementIncrement incrementPayload) {
        this.incrementPayload = incrementPayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementUpdateRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setStepsAtLeastPayload")
    public GamesAchievementSetStepsAtLeast setStepsAtLeastPayload;
    public AchievementUpdateRequest withSetStepsAtLeastPayload(GamesAchievementSetStepsAtLeast setStepsAtLeastPayload) {
        this.setStepsAtLeastPayload = setStepsAtLeastPayload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateType")
    public AchievementUpdateRequestUpdateTypeEnum updateType;
    public AchievementUpdateRequest withUpdateType(AchievementUpdateRequestUpdateTypeEnum updateType) {
        this.updateType = updateType;
        return this;
    }
}