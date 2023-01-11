package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerScoreListResponse
 * A list of score submission statuses.
**/
public class PlayerScoreListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlayerScoreListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submittedScores")
    public PlayerScoreResponse[] submittedScores;
    public PlayerScoreListResponse withSubmittedScores(PlayerScoreResponse[] submittedScores) {
        this.submittedScores = submittedScores;
        return this;
    }
}