package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesMediaMostPopularMediaFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public GetResourcesMediaMostPopularMediaFormatPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}