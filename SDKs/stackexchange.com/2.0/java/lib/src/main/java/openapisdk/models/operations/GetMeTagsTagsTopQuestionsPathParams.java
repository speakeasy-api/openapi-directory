package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeTagsTagsTopQuestionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tags")
    public String tags;
    public GetMeTagsTagsTopQuestionsPathParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}