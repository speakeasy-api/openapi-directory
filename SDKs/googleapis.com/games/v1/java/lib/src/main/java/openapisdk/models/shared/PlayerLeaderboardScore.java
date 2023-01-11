package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerLeaderboardScore
 * A player leaderboard score object.
**/
public class PlayerLeaderboardScore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendsRank")
    public LeaderboardScoreRank friendsRank;
    public PlayerLeaderboardScore withFriendsRank(LeaderboardScoreRank friendsRank) {
        this.friendsRank = friendsRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlayerLeaderboardScore withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leaderboard_id")
    public String leaderboardId;
    public PlayerLeaderboardScore withLeaderboardId(String leaderboardId) {
        this.leaderboardId = leaderboardId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicRank")
    public LeaderboardScoreRank publicRank;
    public PlayerLeaderboardScore withPublicRank(LeaderboardScoreRank publicRank) {
        this.publicRank = publicRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreString")
    public String scoreString;
    public PlayerLeaderboardScore withScoreString(String scoreString) {
        this.scoreString = scoreString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreTag")
    public String scoreTag;
    public PlayerLeaderboardScore withScoreTag(String scoreTag) {
        this.scoreTag = scoreTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreValue")
    public String scoreValue;
    public PlayerLeaderboardScore withScoreValue(String scoreValue) {
        this.scoreValue = scoreValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("socialRank")
    public LeaderboardScoreRank socialRank;
    public PlayerLeaderboardScore withSocialRank(LeaderboardScoreRank socialRank) {
        this.socialRank = socialRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSpan")
    public PlayerLeaderboardScoreTimeSpanEnum timeSpan;
    public PlayerLeaderboardScore withTimeSpan(PlayerLeaderboardScoreTimeSpanEnum timeSpan) {
        this.timeSpan = timeSpan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writeTimestamp")
    public String writeTimestamp;
    public PlayerLeaderboardScore withWriteTimestamp(String writeTimestamp) {
        this.writeTimestamp = writeTimestamp;
        return this;
    }
}