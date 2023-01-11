package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerScoreSubmissionList
 * A list of score submission requests.
**/
public class PlayerScoreSubmissionList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlayerScoreSubmissionList withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scores")
    public ScoreSubmission[] scores;
    public PlayerScoreSubmissionList withScores(ScoreSubmission[] scores) {
        this.scores = scores;
        return this;
    }
}