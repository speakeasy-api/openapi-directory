package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScoresByDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public ScoresByDatePathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ScoresByDateFormatEnum format;
    public ScoresByDatePathParams withFormat(ScoresByDateFormatEnum format) {
        this.format = format;
        return this;
    }
}