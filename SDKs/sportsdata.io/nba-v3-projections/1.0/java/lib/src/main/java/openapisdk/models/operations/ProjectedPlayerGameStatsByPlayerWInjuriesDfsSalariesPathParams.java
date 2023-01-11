package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum format;
    public ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesPathParams withFormat(ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
}