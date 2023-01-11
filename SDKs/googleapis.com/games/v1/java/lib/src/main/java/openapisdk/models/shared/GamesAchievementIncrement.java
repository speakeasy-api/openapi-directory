package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GamesAchievementIncrement
 * The payload to request to increment an achievement.
**/
public class GamesAchievementIncrement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public GamesAchievementIncrement withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GamesAchievementIncrement withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public Integer steps;
    public GamesAchievementIncrement withSteps(Integer steps) {
        this.steps = steps;
        return this;
    }
}