package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSeasonSplitStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerSeasonSplitStatsFormatEnum format;
    public PlayerSeasonSplitStatsPathParams withFormat(PlayerSeasonSplitStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerSeasonSplitStatsPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=split")
    public PlayerSeasonSplitStatsSplitEnum split;
    public PlayerSeasonSplitStatsPathParams withSplit(PlayerSeasonSplitStatsSplitEnum split) {
        this.split = split;
        return this;
    }
}