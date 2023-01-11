package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AchievementRevealResponse
 * An achievement reveal response
**/
public class AchievementRevealResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentState")
    public AchievementRevealResponseCurrentStateEnum currentState;
    public AchievementRevealResponse withCurrentState(AchievementRevealResponseCurrentStateEnum currentState) {
        this.currentState = currentState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AchievementRevealResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}