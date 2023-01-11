package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerSeasonStatsWithAdpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerSeasonStatsWithAdpFormatEnum format;
    public ProjectedPlayerSeasonStatsWithAdpPathParams withFormat(ProjectedPlayerSeasonStatsWithAdpFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ProjectedPlayerSeasonStatsWithAdpPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}