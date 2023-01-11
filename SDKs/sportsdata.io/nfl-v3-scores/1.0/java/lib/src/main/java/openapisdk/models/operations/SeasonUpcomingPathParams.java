package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeasonUpcomingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public SeasonUpcomingFormatEnum format;
    public SeasonUpcomingPathParams withFormat(SeasonUpcomingFormatEnum format) {
        this.format = format;
        return this;
    }
}