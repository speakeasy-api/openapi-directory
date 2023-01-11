package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WeekCurrentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public WeekCurrentPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}