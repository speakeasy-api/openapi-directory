package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WeekLastCompletedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public WeekLastCompletedPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}