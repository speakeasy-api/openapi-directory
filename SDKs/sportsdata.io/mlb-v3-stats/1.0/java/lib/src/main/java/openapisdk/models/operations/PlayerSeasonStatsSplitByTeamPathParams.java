package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSeasonStatsSplitByTeamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerSeasonStatsSplitByTeamFormatEnum format;
    public PlayerSeasonStatsSplitByTeamPathParams withFormat(PlayerSeasonStatsSplitByTeamFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerSeasonStatsSplitByTeamPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}