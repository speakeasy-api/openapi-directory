package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerFormatEnum format;
    public PlayerPathParams withFormat(PlayerFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public PlayerPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
}