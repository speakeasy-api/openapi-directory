package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CurrentWeekPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public CurrentWeekFormatEnum format;
    public CurrentWeekPathParams withFormat(CurrentWeekFormatEnum format) {
        this.format = format;
        return this;
    }
}