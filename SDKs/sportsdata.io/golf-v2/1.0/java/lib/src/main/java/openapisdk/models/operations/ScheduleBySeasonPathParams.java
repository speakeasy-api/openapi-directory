package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScheduleBySeasonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ScheduleBySeasonFormatEnum format;
    public ScheduleBySeasonPathParams withFormat(ScheduleBySeasonFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=season")
    public String season;
    public ScheduleBySeasonPathParams withSeason(String season) {
        this.season = season;
        return this;
    }
}