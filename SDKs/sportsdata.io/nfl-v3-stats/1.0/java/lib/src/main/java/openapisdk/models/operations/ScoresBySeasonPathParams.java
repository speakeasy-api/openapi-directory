package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScoresBySeasonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public ScoresBySeasonPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ScoresBySeasonPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}