package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerLevel
 * 1P/3P metadata about a user's level.
**/
public class PlayerLevel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlayerLevel withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public Integer level;
    public PlayerLevel withLevel(Integer level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxExperiencePoints")
    public String maxExperiencePoints;
    public PlayerLevel withMaxExperiencePoints(String maxExperiencePoints) {
        this.maxExperiencePoints = maxExperiencePoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minExperiencePoints")
    public String minExperiencePoints;
    public PlayerLevel withMinExperiencePoints(String minExperiencePoints) {
        this.minExperiencePoints = minExperiencePoints;
        return this;
    }
}