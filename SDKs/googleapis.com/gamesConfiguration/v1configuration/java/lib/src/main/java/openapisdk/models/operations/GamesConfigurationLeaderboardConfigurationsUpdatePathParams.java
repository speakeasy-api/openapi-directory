package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationLeaderboardConfigurationsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=leaderboardId")
    public String leaderboardId;
    public GamesConfigurationLeaderboardConfigurationsUpdatePathParams withLeaderboardId(String leaderboardId) {
        this.leaderboardId = leaderboardId;
        return this;
    }
}