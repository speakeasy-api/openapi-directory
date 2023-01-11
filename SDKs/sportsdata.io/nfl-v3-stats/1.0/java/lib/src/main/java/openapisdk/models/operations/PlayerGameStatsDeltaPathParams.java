package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerGameStatsDeltaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerGameStatsDeltaFormatEnum format;
    public PlayerGameStatsDeltaPathParams withFormat(PlayerGameStatsDeltaFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=minutes")
    public String minutes;
    public PlayerGameStatsDeltaPathParams withMinutes(String minutes) {
        this.minutes = minutes;
        return this;
    }
}