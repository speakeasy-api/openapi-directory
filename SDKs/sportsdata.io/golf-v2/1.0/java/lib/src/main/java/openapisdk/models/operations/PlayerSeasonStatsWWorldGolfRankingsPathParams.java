package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSeasonStatsWWorldGolfRankingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerSeasonStatsWWorldGolfRankingsFormatEnum format;
    public PlayerSeasonStatsWWorldGolfRankingsPathParams withFormat(PlayerSeasonStatsWWorldGolfRankingsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerSeasonStatsWWorldGolfRankingsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}