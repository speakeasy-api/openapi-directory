package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GamesPlayerLevelResource
 * 1P/3P metadata about a user's level.
**/
public class GamesPlayerLevelResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public Integer level;
    public GamesPlayerLevelResource withLevel(Integer level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxExperiencePoints")
    public String maxExperiencePoints;
    public GamesPlayerLevelResource withMaxExperiencePoints(String maxExperiencePoints) {
        this.maxExperiencePoints = maxExperiencePoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minExperiencePoints")
    public String minExperiencePoints;
    public GamesPlayerLevelResource withMinExperiencePoints(String minExperiencePoints) {
        this.minExperiencePoints = minExperiencePoints;
        return this;
    }
}