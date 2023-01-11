package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerGameStatsByPlayerWDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public ProjectedPlayerGameStatsByPlayerWDfsSalariesPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum format;
    public ProjectedPlayerGameStatsByPlayerWDfsSalariesPathParams withFormat(ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public ProjectedPlayerGameStatsByPlayerWDfsSalariesPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
}