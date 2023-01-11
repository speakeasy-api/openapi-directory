package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LeaderboardScoreRank
 * A score rank in a leaderboard.
**/
public class LeaderboardScoreRank {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedNumScores")
    public String formattedNumScores;
    public LeaderboardScoreRank withFormattedNumScores(String formattedNumScores) {
        this.formattedNumScores = formattedNumScores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedRank")
    public String formattedRank;
    public LeaderboardScoreRank withFormattedRank(String formattedRank) {
        this.formattedRank = formattedRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LeaderboardScoreRank withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numScores")
    public String numScores;
    public LeaderboardScoreRank withNumScores(String numScores) {
        this.numScores = numScores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public String rank;
    public LeaderboardScoreRank withRank(String rank) {
        this.rank = rank;
        return this;
    }
}