package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProBowlersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProBowlersFormatEnum format;
    public ProBowlersPathParams withFormat(ProBowlersFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ProBowlersPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}