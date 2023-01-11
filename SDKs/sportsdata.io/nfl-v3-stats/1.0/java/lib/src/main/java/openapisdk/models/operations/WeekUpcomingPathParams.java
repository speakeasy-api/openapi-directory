package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WeekUpcomingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public WeekUpcomingPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}