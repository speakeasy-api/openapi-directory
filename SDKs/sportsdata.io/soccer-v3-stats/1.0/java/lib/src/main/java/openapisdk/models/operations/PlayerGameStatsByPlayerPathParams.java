package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerGameStatsByPlayerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public PlayerGameStatsByPlayerPathParams withDate(String date) {
        this.date = date;
        return this;
    }
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
}