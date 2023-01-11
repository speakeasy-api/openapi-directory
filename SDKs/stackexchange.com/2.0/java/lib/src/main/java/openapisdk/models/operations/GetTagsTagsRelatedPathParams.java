package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsTagsRelatedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tags")
    public String tags;
    public GetTagsTagsRelatedPathParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}