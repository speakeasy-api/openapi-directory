package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementConfiguration
 * An achievement configuration resource.
**/
public class AchievementConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("achievementType")
    public AchievementConfigurationAchievementTypeEnum achievementType;
    public AchievementConfiguration withAchievementType(AchievementConfigurationAchievementTypeEnum achievementType) {
        this.achievementType = achievementType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("draft")
    public AchievementConfigurationDetail draft;
    public AchievementConfiguration withDraft(AchievementConfigurationDetail draft) {
        this.draft = draft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AchievementConfiguration withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialState")
    public AchievementConfigurationInitialStateEnum initialState;
    public AchievementConfiguration withInitialState(AchievementConfigurationInitialStateEnum initialState) {
        this.initialState = initialState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementConfiguration withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published")
    public AchievementConfigurationDetail published;
    public AchievementConfiguration withPublished(AchievementConfigurationDetail published) {
        this.published = published;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepsToUnlock")
    public Integer stepsToUnlock;
    public AchievementConfiguration withStepsToUnlock(Integer stepsToUnlock) {
        this.stepsToUnlock = stepsToUnlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public AchievementConfiguration withToken(String token) {
        this.token = token;
        return this;
    }
}