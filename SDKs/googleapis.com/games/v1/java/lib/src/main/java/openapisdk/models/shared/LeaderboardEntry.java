package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LeaderboardEntry
 * The Leaderboard Entry resource.
**/
public class LeaderboardEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedScore")
    public String formattedScore;
    public LeaderboardEntry withFormattedScore(String formattedScore) {
        this.formattedScore = formattedScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedScoreRank")
    public String formattedScoreRank;
    public LeaderboardEntry withFormattedScoreRank(String formattedScoreRank) {
        this.formattedScoreRank = formattedScoreRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LeaderboardEntry withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("player")
    public Player player;
    public LeaderboardEntry withPlayer(Player player) {
        this.player = player;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreRank")
    public String scoreRank;
    public LeaderboardEntry withScoreRank(String scoreRank) {
        this.scoreRank = scoreRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreTag")
    public String scoreTag;
    public LeaderboardEntry withScoreTag(String scoreTag) {
        this.scoreTag = scoreTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreValue")
    public String scoreValue;
    public LeaderboardEntry withScoreValue(String scoreValue) {
        this.scoreValue = scoreValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSpan")
    public LeaderboardEntryTimeSpanEnum timeSpan;
    public LeaderboardEntry withTimeSpan(LeaderboardEntryTimeSpanEnum timeSpan) {
        this.timeSpan = timeSpan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writeTimestampMillis")
    public String writeTimestampMillis;
    public LeaderboardEntry withWriteTimestampMillis(String writeTimestampMillis) {
        this.writeTimestampMillis = writeTimestampMillis;
        return this;
    }
}