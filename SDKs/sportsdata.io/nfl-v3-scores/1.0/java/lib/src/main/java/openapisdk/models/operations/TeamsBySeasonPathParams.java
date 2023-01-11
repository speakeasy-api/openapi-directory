package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsBySeasonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TeamsBySeasonFormatEnum format;
    public TeamsBySeasonPathParams withFormat(TeamsBySeasonFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public TeamsBySeasonPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}