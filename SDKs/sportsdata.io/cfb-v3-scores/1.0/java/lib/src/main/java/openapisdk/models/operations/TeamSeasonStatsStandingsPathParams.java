package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamSeasonStatsStandingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TeamSeasonStatsStandingsFormatEnum format;
    public TeamSeasonStatsStandingsPathParams withFormat(TeamSeasonStatsStandingsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public TeamSeasonStatsStandingsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}