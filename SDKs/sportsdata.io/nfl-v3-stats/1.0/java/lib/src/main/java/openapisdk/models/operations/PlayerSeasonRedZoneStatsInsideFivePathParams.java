package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSeasonRedZoneStatsInsideFivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerSeasonRedZoneStatsInsideFiveFormatEnum format;
    public PlayerSeasonRedZoneStatsInsideFivePathParams withFormat(PlayerSeasonRedZoneStatsInsideFiveFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerSeasonRedZoneStatsInsideFivePathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}