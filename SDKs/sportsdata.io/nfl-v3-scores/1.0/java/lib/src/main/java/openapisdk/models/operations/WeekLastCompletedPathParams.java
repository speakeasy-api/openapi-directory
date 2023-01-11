package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WeekLastCompletedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public WeekLastCompletedFormatEnum format;
    public WeekLastCompletedPathParams withFormat(WeekLastCompletedFormatEnum format) {
        this.format = format;
        return this;
    }
}