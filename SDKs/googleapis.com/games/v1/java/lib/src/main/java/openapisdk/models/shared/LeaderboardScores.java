package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LeaderboardScores
 * A ListScores response.
**/
public class LeaderboardScores {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public LeaderboardEntry[] items;
    public LeaderboardScores withItems(LeaderboardEntry[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LeaderboardScores withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public LeaderboardScores withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numScores")
    public String numScores;
    public LeaderboardScores withNumScores(String numScores) {
        this.numScores = numScores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playerScore")
    public LeaderboardEntry playerScore;
    public LeaderboardScores withPlayerScore(LeaderboardEntry playerScore) {
        this.playerScore = playerScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prevPageToken")
    public String prevPageToken;
    public LeaderboardScores withPrevPageToken(String prevPageToken) {
        this.prevPageToken = prevPageToken;
        return this;
    }
}