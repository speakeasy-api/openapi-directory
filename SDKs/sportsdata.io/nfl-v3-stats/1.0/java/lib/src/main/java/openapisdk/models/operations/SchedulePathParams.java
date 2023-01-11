package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public SchedulePathParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public SchedulePathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}