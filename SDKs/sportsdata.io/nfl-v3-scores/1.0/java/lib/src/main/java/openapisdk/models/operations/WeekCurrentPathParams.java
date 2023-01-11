package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WeekCurrentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public WeekCurrentFormatEnum format;
    public WeekCurrentPathParams withFormat(WeekCurrentFormatEnum format) {
        this.format = format;
        return this;
    }
}