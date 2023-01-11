package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum format;
    public ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams withFormat(ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerid")
    public String playerid;
    public ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams withPlayerid(String playerid) {
        this.playerid = playerid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}