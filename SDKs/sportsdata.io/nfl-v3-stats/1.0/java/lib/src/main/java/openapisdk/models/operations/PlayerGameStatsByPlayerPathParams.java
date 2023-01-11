package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerGameStatsByPlayerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerGameStatsByPlayerFormatEnum format;
    public PlayerGameStatsByPlayerPathParams withFormat(PlayerGameStatsByPlayerFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public PlayerGameStatsByPlayerPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerGameStatsByPlayerPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=week")
    public String week;
    public PlayerGameStatsByPlayerPathParams withWeek(String week) {
        this.week = week;
        return this;
    }
}