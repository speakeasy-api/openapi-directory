package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSeasonThirdDownStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerSeasonThirdDownStatsFormatEnum format;
    public PlayerSeasonThirdDownStatsPathParams withFormat(PlayerSeasonThirdDownStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerSeasonThirdDownStatsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}