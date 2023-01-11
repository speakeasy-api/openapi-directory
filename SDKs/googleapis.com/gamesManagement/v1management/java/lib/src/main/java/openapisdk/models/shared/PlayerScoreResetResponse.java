package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerScoreResetResponse
 * A list of reset leaderboard entry resources.
**/
public class PlayerScoreResetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definitionId")
    public String definitionId;
    public PlayerScoreResetResponse withDefinitionId(String definitionId) {
        this.definitionId = definitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlayerScoreResetResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resetScoreTimeSpans")
    public String[] resetScoreTimeSpans;
    public PlayerScoreResetResponse withResetScoreTimeSpans(String[] resetScoreTimeSpans) {
        this.resetScoreTimeSpans = resetScoreTimeSpans;
        return this;
    }
}