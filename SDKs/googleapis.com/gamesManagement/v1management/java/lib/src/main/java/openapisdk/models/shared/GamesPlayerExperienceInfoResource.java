package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GamesPlayerExperienceInfoResource
 * 1P/3P metadata about the player's experience.
**/
public class GamesPlayerExperienceInfoResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentExperiencePoints")
    public String currentExperiencePoints;
    public GamesPlayerExperienceInfoResource withCurrentExperiencePoints(String currentExperiencePoints) {
        this.currentExperiencePoints = currentExperiencePoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentLevel")
    public GamesPlayerLevelResource currentLevel;
    public GamesPlayerExperienceInfoResource withCurrentLevel(GamesPlayerLevelResource currentLevel) {
        this.currentLevel = currentLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastLevelUpTimestampMillis")
    public String lastLevelUpTimestampMillis;
    public GamesPlayerExperienceInfoResource withLastLevelUpTimestampMillis(String lastLevelUpTimestampMillis) {
        this.lastLevelUpTimestampMillis = lastLevelUpTimestampMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextLevel")
    public GamesPlayerLevelResource nextLevel;
    public GamesPlayerExperienceInfoResource withNextLevel(GamesPlayerLevelResource nextLevel) {
        this.nextLevel = nextLevel;
        return this;
    }
}