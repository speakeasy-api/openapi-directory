package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FantasyDefenseSeasonStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public FantasyDefenseSeasonStatsFormatEnum format;
    public FantasyDefenseSeasonStatsPathParams withFormat(FantasyDefenseSeasonStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public FantasyDefenseSeasonStatsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}