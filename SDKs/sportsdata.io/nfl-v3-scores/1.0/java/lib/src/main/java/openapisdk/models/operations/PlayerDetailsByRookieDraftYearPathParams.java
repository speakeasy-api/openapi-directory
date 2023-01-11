package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerDetailsByRookieDraftYearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerDetailsByRookieDraftYearFormatEnum format;
    public PlayerDetailsByRookieDraftYearPathParams withFormat(PlayerDetailsByRookieDraftYearFormatEnum format) {
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