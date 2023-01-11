package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesTagsIdFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public GetResourcesTagsIdFormatPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourcesTagsIdFormatPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}