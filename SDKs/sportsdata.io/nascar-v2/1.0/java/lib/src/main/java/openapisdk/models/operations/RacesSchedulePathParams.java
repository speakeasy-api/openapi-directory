package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RacesSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public RacesScheduleFormatEnum format;
    public RacesSchedulePathParams withFormat(RacesScheduleFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public RacesSchedulePathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}