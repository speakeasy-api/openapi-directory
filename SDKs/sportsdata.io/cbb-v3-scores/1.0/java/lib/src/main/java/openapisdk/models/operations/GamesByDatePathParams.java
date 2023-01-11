package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesByDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public GamesByDatePathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GamesByDateFormatEnum format;
    public GamesByDatePathParams withFormat(GamesByDateFormatEnum format) {
        this.format = format;
        return this;
    }
}