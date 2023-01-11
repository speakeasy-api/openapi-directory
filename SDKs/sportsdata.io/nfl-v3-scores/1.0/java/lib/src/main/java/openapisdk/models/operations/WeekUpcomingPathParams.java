package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WeekUpcomingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public WeekUpcomingFormatEnum format;
    public WeekUpcomingPathParams withFormat(WeekUpcomingFormatEnum format) {
        this.format = format;
        return this;
    }
}