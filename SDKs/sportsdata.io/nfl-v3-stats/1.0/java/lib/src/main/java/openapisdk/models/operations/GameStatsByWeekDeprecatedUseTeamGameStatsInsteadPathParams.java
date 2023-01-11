package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum format;
    public GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams withFormat(GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}