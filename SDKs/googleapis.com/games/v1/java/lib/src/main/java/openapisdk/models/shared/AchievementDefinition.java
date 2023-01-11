package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementDefinition
 * An achievement definition object.
**/
public class AchievementDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("achievementType")
    public AchievementDefinitionAchievementTypeEnum achievementType;
    public AchievementDefinition withAchievementType(AchievementDefinitionAchievementTypeEnum achievementType) {
        this.achievementType = achievementType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AchievementDefinition withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("experiencePoints")
    public String experiencePoints;
    public AchievementDefinition withExperiencePoints(String experiencePoints) {
        this.experiencePoints = experiencePoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedTotalSteps")
    public String formattedTotalSteps;
    public AchievementDefinition withFormattedTotalSteps(String formattedTotalSteps) {
        this.formattedTotalSteps = formattedTotalSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AchievementDefinition withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialState")
    public AchievementDefinitionInitialStateEnum initialState;
    public AchievementDefinition withInitialState(AchievementDefinitionInitialStateEnum initialState) {
        this.initialState = initialState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRevealedIconUrlDefault")
    public Boolean isRevealedIconUrlDefault;
    public AchievementDefinition withIsRevealedIconUrlDefault(Boolean isRevealedIconUrlDefault) {
        this.isRevealedIconUrlDefault = isRevealedIconUrlDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isUnlockedIconUrlDefault")
    public Boolean isUnlockedIconUrlDefault;
    public AchievementDefinition withIsUnlockedIconUrlDefault(Boolean isUnlockedIconUrlDefault) {
        this.isUnlockedIconUrlDefault = isUnlockedIconUrlDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementDefinition withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AchievementDefinition withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revealedIconUrl")
    public String revealedIconUrl;
    public AchievementDefinition withRevealedIconUrl(String revealedIconUrl) {
        this.revealedIconUrl = revealedIconUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSteps")
    public Integer totalSteps;
    public AchievementDefinition withTotalSteps(Integer totalSteps) {
        this.totalSteps = totalSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlockedIconUrl")
    public String unlockedIconUrl;
    public AchievementDefinition withUnlockedIconUrl(String unlockedIconUrl) {
        this.unlockedIconUrl = unlockedIconUrl;
        return this;
    }
}