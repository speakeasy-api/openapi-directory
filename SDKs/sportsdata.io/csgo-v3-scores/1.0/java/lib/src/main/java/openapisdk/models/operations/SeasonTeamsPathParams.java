package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeasonTeamsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public SeasonTeamsFormatEnum format;
    public SeasonTeamsPathParams withFormat(SeasonTeamsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=seasonid")
    public String seasonid;
    public SeasonTeamsPathParams withSeasonid(String seasonid) {
        this.seasonid = seasonid;
        return this;
    }
}