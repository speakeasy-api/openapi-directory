package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RotoballerArticlesByPlayerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public RotoballerArticlesByPlayerFormatEnum format;
    public RotoballerArticlesByPlayerPathParams withFormat(RotoballerArticlesByPlayerFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public RotoballerArticlesByPlayerPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
}