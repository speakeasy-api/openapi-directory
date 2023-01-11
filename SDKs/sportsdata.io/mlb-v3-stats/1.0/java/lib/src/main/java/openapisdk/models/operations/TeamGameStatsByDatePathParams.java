package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamGameStatsByDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public TeamGameStatsByDatePathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TeamGameStatsByDateFormatEnum format;
    public TeamGameStatsByDatePathParams withFormat(TeamGameStatsByDateFormatEnum format) {
        this.format = format;
        return this;
    }
}