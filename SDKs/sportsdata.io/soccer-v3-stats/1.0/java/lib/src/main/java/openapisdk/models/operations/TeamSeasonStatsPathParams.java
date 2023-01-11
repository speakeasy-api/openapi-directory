package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamSeasonStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TeamSeasonStatsFormatEnum format;
    public TeamSeasonStatsPathParams withFormat(TeamSeasonStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roundid")
    public String roundid;
    public TeamSeasonStatsPathParams withRoundid(String roundid) {
        this.roundid = roundid;
        return this;
    }
}