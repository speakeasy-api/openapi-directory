package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TimeframesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public TimeframesPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public TimeframesPathParams withType(String type) {
        this.type = type;
        return this;
    }
}