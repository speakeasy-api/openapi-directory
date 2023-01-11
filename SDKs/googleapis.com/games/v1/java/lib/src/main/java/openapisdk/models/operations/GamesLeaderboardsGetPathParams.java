package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesLeaderboardsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=leaderboardId")
    public String leaderboardId;
    public GamesLeaderboardsGetPathParams withLeaderboardId(String leaderboardId) {
        this.leaderboardId = leaderboardId;
        return this;
    }
}