package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlayerLeaderboardScoreListResponse
 * A list of player leaderboard scores.
**/
public class PlayerLeaderboardScoreListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public PlayerLeaderboardScore[] items;
    public PlayerLeaderboardScoreListResponse withItems(PlayerLeaderboardScore[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PlayerLeaderboardScoreListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public PlayerLeaderboardScoreListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("player")
    public Player player;
    public PlayerLeaderboardScoreListResponse withPlayer(Player player) {
        this.player = player;
        return this;
    }
}