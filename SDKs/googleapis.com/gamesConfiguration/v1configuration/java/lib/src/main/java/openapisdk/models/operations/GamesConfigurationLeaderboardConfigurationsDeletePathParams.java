package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationLeaderboardConfigurationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=leaderboardId")
    public String leaderboardId;
    public GamesConfigurationLeaderboardConfigurationsDeletePathParams withLeaderboardId(String leaderboardId) {
        this.leaderboardId = leaderboardId;
        return this;
    }
}