package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum format;
    public ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams withFormat(ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}