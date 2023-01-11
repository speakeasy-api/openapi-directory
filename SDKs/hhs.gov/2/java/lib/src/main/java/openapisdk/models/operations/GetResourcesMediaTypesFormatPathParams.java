package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesMediaTypesFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public GetResourcesMediaTypesFormatPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}