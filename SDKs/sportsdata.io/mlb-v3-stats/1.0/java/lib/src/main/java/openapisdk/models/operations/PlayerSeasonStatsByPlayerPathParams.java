package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSeasonStatsByPlayerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerSeasonStatsByPlayerFormatEnum format;
    public PlayerSeasonStatsByPlayerPathParams withFormat(PlayerSeasonStatsByPlayerFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public PlayerSeasonStatsByPlayerPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerSeasonStatsByPlayerPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}