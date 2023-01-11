package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayByPlayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayByPlayFormatEnum format;
    public PlayByPlayPathParams withFormat(PlayByPlayFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gameid")
    public String gameid;
    public PlayByPlayPathParams withGameid(String gameid) {
        this.gameid = gameid;
        return this;
    }
}