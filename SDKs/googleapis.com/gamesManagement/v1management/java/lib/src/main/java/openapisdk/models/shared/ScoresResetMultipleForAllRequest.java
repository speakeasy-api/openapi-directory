package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScoresResetMultipleForAllRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ScoresResetMultipleForAllRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leaderboard_ids")
    public String[] leaderboardIds;
    public ScoresResetMultipleForAllRequest withLeaderboardIds(String[] leaderboardIds) {
        this.leaderboardIds = leaderboardIds;
        return this;
    }
}