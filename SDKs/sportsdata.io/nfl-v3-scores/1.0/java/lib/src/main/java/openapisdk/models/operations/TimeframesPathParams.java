package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TimeframesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TimeframesFormatEnum format;
    public TimeframesPathParams withFormat(TimeframesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public TimeframesTypeEnum type;
    public TimeframesPathParams withType(TimeframesTypeEnum type) {
        this.type = type;
        return this;
    }
}