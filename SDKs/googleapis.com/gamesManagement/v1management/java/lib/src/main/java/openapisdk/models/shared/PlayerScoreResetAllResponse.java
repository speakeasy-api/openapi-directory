package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerScoreResetAllResponse
 * A list of leaderboard reset resources.
**/
public class PlayerScoreResetAllResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlayerScoreResetAllResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public PlayerScoreResetResponse[] results;
    public PlayerScoreResetAllResponse withResults(PlayerScoreResetResponse[] results) {
        this.results = results;
        return this;
    }
}