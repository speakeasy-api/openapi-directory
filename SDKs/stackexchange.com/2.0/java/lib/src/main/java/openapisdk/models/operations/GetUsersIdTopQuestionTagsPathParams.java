package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdTopQuestionTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetUsersIdTopQuestionTagsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}