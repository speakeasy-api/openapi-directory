package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSeasonAwayStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerSeasonAwayStatsFormatEnum format;
    public PlayerSeasonAwayStatsPathParams withFormat(PlayerSeasonAwayStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerSeasonAwayStatsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}