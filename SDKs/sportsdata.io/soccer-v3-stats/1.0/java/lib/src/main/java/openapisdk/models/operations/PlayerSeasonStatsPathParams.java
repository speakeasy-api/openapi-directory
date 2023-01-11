package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerSeasonStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerSeasonStatsFormatEnum format;
    public PlayerSeasonStatsPathParams withFormat(PlayerSeasonStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roundid")
    public String roundid;
    public PlayerSeasonStatsPathParams withRoundid(String roundid) {
        this.roundid = roundid;
        return this;
    }
}