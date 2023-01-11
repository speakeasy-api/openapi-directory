package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewsByPlayerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public NewsByPlayerFormatEnum format;
    public NewsByPlayerPathParams withFormat(NewsByPlayerFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public NewsByPlayerPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
}