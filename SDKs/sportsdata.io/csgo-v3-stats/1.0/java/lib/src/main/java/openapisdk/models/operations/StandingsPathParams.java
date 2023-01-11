package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StandingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public StandingsFormatEnum format;
    public StandingsPathParams withFormat(StandingsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roundid")
    public String roundid;
    public StandingsPathParams withRoundid(String roundid) {
        this.roundid = roundid;
        return this;
    }
}