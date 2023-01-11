package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public GetUserPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}