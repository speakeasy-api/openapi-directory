package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerSeasonStatsWByeWeekAdpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum format;
    public ProjectedPlayerSeasonStatsWByeWeekAdpPathParams withFormat(ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ProjectedPlayerSeasonStatsWByeWeekAdpPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}