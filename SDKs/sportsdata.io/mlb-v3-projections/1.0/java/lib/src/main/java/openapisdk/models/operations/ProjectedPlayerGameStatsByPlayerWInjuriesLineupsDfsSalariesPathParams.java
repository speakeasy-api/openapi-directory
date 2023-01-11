package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum format;
    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams withFormat(ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
}