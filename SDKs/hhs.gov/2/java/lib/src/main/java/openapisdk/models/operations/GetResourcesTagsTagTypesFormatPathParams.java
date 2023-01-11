package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesTagsTagTypesFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public GetResourcesTagsTagTypesFormatPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}