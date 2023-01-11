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
    public String format;
    public ScoresByDatePathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}