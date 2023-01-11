package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesScoresSubmitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=leaderboardId")
    public String leaderboardId;
    public GamesScoresSubmitPathParams withLeaderboardId(String leaderboardId) {
        this.leaderboardId = leaderboardId;
        return this;
    }
}