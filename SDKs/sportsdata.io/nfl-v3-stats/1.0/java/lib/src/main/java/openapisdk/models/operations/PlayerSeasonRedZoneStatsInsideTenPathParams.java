package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSeasonRedZoneStatsInsideTenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerSeasonRedZoneStatsInsideTenFormatEnum format;
    public PlayerSeasonRedZoneStatsInsideTenPathParams withFormat(PlayerSeasonRedZoneStatsInsideTenFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerSeasonRedZoneStatsInsideTenPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}