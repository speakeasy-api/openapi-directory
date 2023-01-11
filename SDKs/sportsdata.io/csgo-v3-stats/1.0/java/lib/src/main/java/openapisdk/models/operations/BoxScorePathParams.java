package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BoxScorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public BoxScoreFormatEnum format;
    public BoxScorePathParams withFormat(BoxScoreFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gameid")
    public String gameid;
    public BoxScorePathParams withGameid(String gameid) {
        this.gameid = gameid;
        return this;
    }
}