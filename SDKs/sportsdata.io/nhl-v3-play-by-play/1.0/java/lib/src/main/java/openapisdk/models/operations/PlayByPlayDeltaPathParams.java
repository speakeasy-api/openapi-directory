package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayByPlayDeltaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public PlayByPlayDeltaPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayByPlayDeltaFormatEnum format;
    public PlayByPlayDeltaPathParams withFormat(PlayByPlayDeltaFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=minutes")
    public String minutes;
    public PlayByPlayDeltaPathParams withMinutes(String minutes) {
        this.minutes = minutes;
        return this;
    }
}