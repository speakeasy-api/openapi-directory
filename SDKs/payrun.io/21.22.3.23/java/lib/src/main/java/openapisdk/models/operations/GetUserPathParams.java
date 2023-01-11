package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserId")
    public String userId;
    public GetUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}