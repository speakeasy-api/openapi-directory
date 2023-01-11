package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerAchievement
 * An achievement object.
**/
public class PlayerAchievement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("achievementState")
    public PlayerAchievementAchievementStateEnum achievementState;
    public PlayerAchievement withAchievementState(PlayerAchievementAchievementStateEnum achievementState) {
        this.achievementState = achievementState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentSteps")
    public Integer currentSteps;
    public PlayerAchievement withCurrentSteps(Integer currentSteps) {
        this.currentSteps = currentSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("experiencePoints")
    public String experiencePoints;
    public PlayerAchievement withExperiencePoints(String experiencePoints) {
        this.experiencePoints = experiencePoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedCurrentStepsString")
    public String formattedCurrentStepsString;
    public PlayerAchievement withFormattedCurrentStepsString(String formattedCurrentStepsString) {
        this.formattedCurrentStepsString = formattedCurrentStepsString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PlayerAchievement withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlayerAchievement withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdatedTimestamp")
    public String lastUpdatedTimestamp;
    public PlayerAchievement withLastUpdatedTimestamp(String lastUpdatedTimestamp) {
        this.lastUpdatedTimestamp = lastUpdatedTimestamp;
        return this;
    }
}