package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerSeasonStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerSeasonStatsFormatEnum format;
    public ProjectedPlayerSeasonStatsPathParams withFormat(ProjectedPlayerSeasonStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ProjectedPlayerSeasonStatsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}