package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ScheduleFormatEnum format;
    public SchedulePathParams withFormat(ScheduleFormatEnum format) {
        this.format = format;
        return this;
    }
}