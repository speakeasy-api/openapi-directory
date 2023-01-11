package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerGameLogsBySeasonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerGameLogsBySeasonFormatEnum format;
    public PlayerGameLogsBySeasonPathParams withFormat(PlayerGameLogsBySeasonFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=numberofgames")
    public String numberofgames;
    public PlayerGameLogsBySeasonPathParams withNumberofgames(String numberofgames) {
        this.numberofgames = numberofgames;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public PlayerGameLogsBySeasonPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerGameLogsBySeasonPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}