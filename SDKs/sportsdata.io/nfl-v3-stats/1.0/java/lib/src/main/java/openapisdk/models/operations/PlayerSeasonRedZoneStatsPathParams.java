package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSeasonRedZoneStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerSeasonRedZoneStatsFormatEnum format;
    public PlayerSeasonRedZoneStatsPathParams withFormat(PlayerSeasonRedZoneStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerSeasonRedZoneStatsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}