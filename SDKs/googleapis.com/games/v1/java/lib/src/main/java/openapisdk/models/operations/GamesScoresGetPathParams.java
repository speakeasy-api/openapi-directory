package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesScoresGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=leaderboardId")
    public String leaderboardId;
    public GamesScoresGetPathParams withLeaderboardId(String leaderboardId) {
        this.leaderboardId = leaderboardId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerId")
    public String playerId;
    public GamesScoresGetPathParams withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=timeSpan")
    public GamesScoresGetTimeSpanEnum timeSpan;
    public GamesScoresGetPathParams withTimeSpan(GamesScoresGetTimeSpanEnum timeSpan) {
        this.timeSpan = timeSpan;
        return this;
    }
}