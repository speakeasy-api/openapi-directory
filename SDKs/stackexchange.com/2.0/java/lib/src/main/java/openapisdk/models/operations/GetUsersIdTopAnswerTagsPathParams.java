package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdTopAnswerTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetUsersIdTopAnswerTagsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}