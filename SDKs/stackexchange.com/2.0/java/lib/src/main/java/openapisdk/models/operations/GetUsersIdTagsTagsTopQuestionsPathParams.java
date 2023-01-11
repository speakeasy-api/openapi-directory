package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdTagsTagsTopQuestionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetUsersIdTagsTagsTopQuestionsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tags")
    public String tags;
    public GetUsersIdTagsTagsTopQuestionsPathParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}