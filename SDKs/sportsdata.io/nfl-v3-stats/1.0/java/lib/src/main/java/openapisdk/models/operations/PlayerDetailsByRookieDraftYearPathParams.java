package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerDetailsByRookieDraftYearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public PlayerDetailsByRookieDraftYearPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public PlayerDetailsByRookieDraftYearPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}