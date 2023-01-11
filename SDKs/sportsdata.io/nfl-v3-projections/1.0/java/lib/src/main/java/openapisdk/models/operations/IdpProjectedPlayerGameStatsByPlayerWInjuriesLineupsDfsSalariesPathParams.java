package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum format;
    public IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams withFormat(IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}