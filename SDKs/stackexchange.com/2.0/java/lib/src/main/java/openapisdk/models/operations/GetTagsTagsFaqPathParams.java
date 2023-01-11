package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsTagsFaqPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tags")
    public String tags;
    public GetTagsTagsFaqPathParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}