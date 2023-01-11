package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerGameStatsByPlayerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public ProjectedPlayerGameStatsByPlayerPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerGameStatsByPlayerFormatEnum format;
    public ProjectedPlayerGameStatsByPlayerPathParams withFormat(ProjectedPlayerGameStatsByPlayerFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public ProjectedPlayerGameStatsByPlayerPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
}