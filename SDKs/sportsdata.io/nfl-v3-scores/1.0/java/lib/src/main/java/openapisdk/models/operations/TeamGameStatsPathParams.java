package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamGameStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TeamGameStatsFormatEnum format;
    public TeamGameStatsPathParams withFormat(TeamGameStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public TeamGameStatsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public TeamGameStatsPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}