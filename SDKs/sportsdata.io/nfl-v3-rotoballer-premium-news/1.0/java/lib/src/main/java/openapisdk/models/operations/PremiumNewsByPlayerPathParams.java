package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PremiumNewsByPlayerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PremiumNewsByPlayerFormatEnum format;
    public PremiumNewsByPlayerPathParams withFormat(PremiumNewsByPlayerFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public PremiumNewsByPlayerPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
}