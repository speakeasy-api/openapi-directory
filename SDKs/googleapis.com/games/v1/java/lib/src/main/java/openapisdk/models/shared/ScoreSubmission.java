package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreSubmission
 * A request to submit a score to leaderboards.
**/
public class ScoreSubmission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ScoreSubmission withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leaderboardId")
    public String leaderboardId;
    public ScoreSubmission withLeaderboardId(String leaderboardId) {
        this.leaderboardId = leaderboardId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public String score;
    public ScoreSubmission withScore(String score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreTag")
    public String scoreTag;
    public ScoreSubmission withScoreTag(String scoreTag) {
        this.scoreTag = scoreTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signature")
    public String signature;
    public ScoreSubmission withSignature(String signature) {
        this.signature = signature;
        return this;
    }
}