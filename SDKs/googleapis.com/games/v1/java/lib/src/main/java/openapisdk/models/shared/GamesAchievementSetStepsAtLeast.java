package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GamesAchievementSetStepsAtLeast
 * The payload to request to increment an achievement.
**/
public class GamesAchievementSetStepsAtLeast {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public GamesAchievementSetStepsAtLeast withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public Integer steps;
    public GamesAchievementSetStepsAtLeast withSteps(Integer steps) {
        this.steps = steps;
        return this;
    }
}