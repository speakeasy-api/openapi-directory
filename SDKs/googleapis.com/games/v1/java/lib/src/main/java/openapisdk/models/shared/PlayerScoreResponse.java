package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerScoreResponse
 * A list of leaderboard entry resources.
**/
public class PlayerScoreResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beatenScoreTimeSpans")
    public PlayerScoreResponseBeatenScoreTimeSpansEnum[] beatenScoreTimeSpans;
    public PlayerScoreResponse withBeatenScoreTimeSpans(PlayerScoreResponseBeatenScoreTimeSpansEnum[] beatenScoreTimeSpans) {
        this.beatenScoreTimeSpans = beatenScoreTimeSpans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedScore")
    public String formattedScore;
    public PlayerScoreResponse withFormattedScore(String formattedScore) {
        this.formattedScore = formattedScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlayerScoreResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leaderboardId")
    public String leaderboardId;
    public PlayerScoreResponse withLeaderboardId(String leaderboardId) {
        this.leaderboardId = leaderboardId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreTag")
    public String scoreTag;
    public PlayerScoreResponse withScoreTag(String scoreTag) {
        this.scoreTag = scoreTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unbeatenScores")
    public PlayerScore[] unbeatenScores;
    public PlayerScoreResponse withUnbeatenScores(PlayerScore[] unbeatenScores) {
        this.unbeatenScores = unbeatenScores;
        return this;
    }
}