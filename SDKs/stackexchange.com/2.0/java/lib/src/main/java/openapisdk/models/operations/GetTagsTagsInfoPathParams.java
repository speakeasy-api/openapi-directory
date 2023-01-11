package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsTagsInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tags")
    public String tags;
    public GetTagsTagsInfoPathParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}