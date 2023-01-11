package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BoxScoresByDateDeltaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public BoxScoresByDateDeltaPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public BoxScoresByDateDeltaFormatEnum format;
    public BoxScoresByDateDeltaPathParams withFormat(BoxScoresByDateDeltaFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=minutes")
    public String minutes;
    public BoxScoresByDateDeltaPathParams withMinutes(String minutes) {
        this.minutes = minutes;
        return this;
    }
}