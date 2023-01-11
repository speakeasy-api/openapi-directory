package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ByeWeeksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public ByeWeeksPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ByeWeeksPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}