package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InjuriesHistoricalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public InjuriesHistoricalFormatEnum format;
    public InjuriesHistoricalPathParams withFormat(InjuriesHistoricalFormatEnum format) {
        this.format = format;
        return this;
    }
}