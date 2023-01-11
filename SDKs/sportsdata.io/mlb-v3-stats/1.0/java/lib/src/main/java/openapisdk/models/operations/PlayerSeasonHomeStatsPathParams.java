package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSeasonHomeStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerSeasonHomeStatsFormatEnum format;
    public PlayerSeasonHomeStatsPathParams withFormat(PlayerSeasonHomeStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerSeasonHomeStatsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}