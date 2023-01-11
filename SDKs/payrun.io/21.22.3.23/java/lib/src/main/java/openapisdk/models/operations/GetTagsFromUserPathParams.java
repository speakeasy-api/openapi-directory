package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsFromUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserId")
    public String userId;
    public GetTagsFromUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}