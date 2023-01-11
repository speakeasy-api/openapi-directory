package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpcomingScheduleByPlayerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public UpcomingScheduleByPlayerFormatEnum format;
    public UpcomingScheduleByPlayerPathParams withFormat(UpcomingScheduleByPlayerFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public UpcomingScheduleByPlayerPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
}