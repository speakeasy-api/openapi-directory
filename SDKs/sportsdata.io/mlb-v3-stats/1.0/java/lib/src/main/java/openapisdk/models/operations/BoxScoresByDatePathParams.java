package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BoxScoresByDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public BoxScoresByDatePathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public BoxScoresByDateFormatEnum format;
    public BoxScoresByDatePathParams withFormat(BoxScoresByDateFormatEnum format) {
        this.format = format;
        return this;
    }
}