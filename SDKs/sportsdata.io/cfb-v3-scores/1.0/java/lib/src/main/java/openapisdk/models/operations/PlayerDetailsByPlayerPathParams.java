package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerDetailsByPlayerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerDetailsByPlayerFormatEnum format;
    public PlayerDetailsByPlayerPathParams withFormat(PlayerDetailsByPlayerFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public PlayerDetailsByPlayerPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
}