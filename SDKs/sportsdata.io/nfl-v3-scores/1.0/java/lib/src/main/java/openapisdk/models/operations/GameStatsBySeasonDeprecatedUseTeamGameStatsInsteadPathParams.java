package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum format;
    public GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams withFormat(GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}