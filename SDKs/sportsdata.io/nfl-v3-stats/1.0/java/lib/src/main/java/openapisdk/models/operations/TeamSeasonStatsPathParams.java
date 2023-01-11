package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamSeasonStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TeamSeasonStatsFormatEnum format;
    public TeamSeasonStatsPathParams withFormat(TeamSeasonStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public TeamSeasonStatsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}