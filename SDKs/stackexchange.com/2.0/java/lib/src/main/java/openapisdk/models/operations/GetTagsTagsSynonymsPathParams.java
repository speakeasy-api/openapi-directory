package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsTagsSynonymsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tags")
    public String tags;
    public GetTagsTagsSynonymsPathParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}