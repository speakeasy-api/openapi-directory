package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerGameStatsByDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public PlayerGameStatsByDatePathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerGameStatsByDateFormatEnum format;
    public PlayerGameStatsByDatePathParams withFormat(PlayerGameStatsByDateFormatEnum format) {
        this.format = format;
        return this;
    }
}