package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum format;
    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams withFormat(ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}