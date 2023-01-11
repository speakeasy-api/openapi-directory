package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SchedulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public SchedulesFormatEnum format;
    public SchedulesPathParams withFormat(SchedulesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public SchedulesPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}