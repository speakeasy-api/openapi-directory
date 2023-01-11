package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeasonUpcomingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public SeasonUpcomingPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}