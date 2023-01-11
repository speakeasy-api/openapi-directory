package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerExperienceInfo
 * 1P/3P metadata about the player's experience.
**/
public class PlayerExperienceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentExperiencePoints")
    public String currentExperiencePoints;
    public PlayerExperienceInfo withCurrentExperiencePoints(String currentExperiencePoints) {
        this.currentExperiencePoints = currentExperiencePoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentLevel")
    public PlayerLevel currentLevel;
    public PlayerExperienceInfo withCurrentLevel(PlayerLevel currentLevel) {
        this.currentLevel = currentLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlayerExperienceInfo withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastLevelUpTimestampMillis")
    public String lastLevelUpTimestampMillis;
    public PlayerExperienceInfo withLastLevelUpTimestampMillis(String lastLevelUpTimestampMillis) {
        this.lastLevelUpTimestampMillis = lastLevelUpTimestampMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextLevel")
    public PlayerLevel nextLevel;
    public PlayerExperienceInfo withNextLevel(PlayerLevel nextLevel) {
        this.nextLevel = nextLevel;
        return this;
    }
}