package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeTagsTagsTopAnswersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tags")
    public String tags;
    public GetMeTagsTagsTopAnswersPathParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}