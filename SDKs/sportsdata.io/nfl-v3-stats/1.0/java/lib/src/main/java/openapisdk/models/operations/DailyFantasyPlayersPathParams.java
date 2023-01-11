package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DailyFantasyPlayersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public DailyFantasyPlayersPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public DailyFantasyPlayersFormatEnum format;
    public DailyFantasyPlayersPathParams withFormat(DailyFantasyPlayersFormatEnum format) {
        this.format = format;
        return this;
    }
}